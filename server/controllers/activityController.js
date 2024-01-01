import Activity from "../models/ActivityModel.js";
import Printer from "../models/PrinterModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllActivities = async (req, res) => {
  // const activities = await Activity.find();
  // res.status(StatusCodes.OK).json({ activities });

  const result = await Activity.aggregate([
    {
      $group: {
        _id: { printerId: "$printerId", printType: "$isBW" },
        usage: {
          $sum: 1,
        },
        pages: {
          $sum: "$pages",
        },
      },
    },
    {
      $group: {
        _id: "$_id.printerId",
        bw: {
          $mergeObjects: {
            $cond: {
              if: { $eq: ["$_id.printType", true] },
              then: { usage: "$usage", pages: "$pages" },
              else: {},
            },
          },
        },
        color: {
          $mergeObjects: {
            $cond: {
              if: { $eq: ["$_id.printType", false] },
              then: { usage: "$usage", pages: "$pages" },
              else: {},
            },
          },
        },
        totalUsage: { $sum: "$usage" },
        totalPages: { $sum: "$pages" },
      },
    },
    {
      $project: {
        _id: "$_id",
        bw: 1,
        color: 1,
        totalUsage: 1,
        totalPages: 1,
      },
    },
    {
      $lookup: {
        from: Printer.collection.name,
        localField: "_id",
        foreignField: "printerId",
        as: "location",
      },
    },
    { $unwind: "$location" },
    {
      $project: {
        location: "$location.location",
        _id: 1,
        totalUsage: 1,
        totalPages: 1,
        bw: 1,
        color: 1,
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ result });
};

export const createActivity = async (req, res) => {
  //#swagger.tags = ['Activities']

  const activity = await Activity.create(req.body);
  res.status(StatusCodes.CREATED).json({ activity });
};

export const getAllActivitiesByDate = async (req, res) => {
  //#swagger.tags = ['Activities']


  const startDate = new Date(req.query.startDate);
  const endDate = new Date(req.query.endDate);
  if (req.query.timestamp == "false") {
    const totalPrinter = await Printer.countDocuments();
    const activities = await Activity.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
      {
        $group: {
          _id: { printerId: "$printerId", printType: "$isBW" },
          usage: {
            $sum: 1,
          },
          pages: {
            $sum: "$pages",
          },
        },
      },
      {
        $group: {
          _id: "$_id.printerId",
          bw: {
            $mergeObjects: {
              $cond: {
                if: { $eq: ["$_id.printType", true] },
                then: { usage: "$usage", pages: "$pages" },
                else: {},
              },
            },
          },
          color: {
            $mergeObjects: {
              $cond: {
                if: { $eq: ["$_id.printType", false] },
                then: { usage: "$usage", pages: "$pages" },
                else: {},
              },
            },
          },
          totalUsage: { $sum: "$usage" },
          totalPages: { $sum: "$pages" },
        },
      },
      {
        $project: {
          _id: "$_id",
          bw: 1,
          color: 1,
          totalUsage: 1,
          totalPages: 1,
        },
      },
      {
        $lookup: {
          from: Printer.collection.name,
          localField: "_id",
          foreignField: "printerId",
          as: "location",
        },
      },
      { $unwind: "$location" },
      {
        $project: {
          location: "$location.location",
          _id: 1,
          totalUsage: 1,
          totalPages: 1,
          bw: 1,
          color: 1,
        },
      },
    ]);

    const location = await Activity.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
      {
        $lookup: {
          from: Printer.collection.name,
          localField: "printerId",
          foreignField: "printerId",
          as: "location",
        },
      },
      { $unwind: "$location" },
      {
        $project: {
          location: "$location.location",
          pages: "$pages",
          _id:0
        },
      },
      {
        $group: {
          _id: "$location",
          pages: {
            $sum:"$pages"
          },
          count: {
            $sum:1
          }
        }
      }
    ]);


    res.status(StatusCodes.OK).json({totalPrinter, activities,location });
  } else {
    const activities = await Activity.aggregate([
      {
        $group: {
          _id: {
            day: { $dayOfMonth: "$createdAt" },
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          count: { $sum: 1 },
          pages:{$sum:"$pages"},
          date: { $first: "$createdAt" },
        },
      },
      {
        $project: {
          date: {
            $dateToString: { format: "%Y-%m-%d", date: "$date" },
          },
          count: 1,
          _id: 0,
          pages:1
        },
      },
    ]);
    res.status(StatusCodes.OK).json({ activities });
  }
};
