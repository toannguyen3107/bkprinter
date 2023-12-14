import Activity from "../models/ActivityModel.js";
import Printer from "../models/PrinterModel.js";
import { StatusCodes } from "http-status-codes";

// const data=[
//   {
//     printerId: 3,
//     userId: 5,
//     document: "IaculisDiamErat.tiff",
//     pages: 69,
//     isBW: false,
//     price: 6418,
//   },
//   {
//     printerId: 1,
//     userId: 4,
//     document: "VelAugue.xls",
//     pages: 95,
//     isBW: true,
//     price: 8826,
//   },
//   {
//     printerId: 3,
//     userId: 3,
//     document: "LoremIntegerTincidunt.jpeg",
//     pages: 90,
//     isBW: true,
//     price: 5168,
//   },
//   {
//     printerId: 3,
//     userId: 8,
//     document: "Condimentum.mpeg",
//     pages: 38,
//     isBW: false,
//     price: 11290,
//   },
//   {
//     printerId: 1,
//     userId: 9,
//     document: "Pulvinar.ppt",
//     pages: 93,
//     isBW: true,
//     price: 9190,
//   },
//   {
//     printerId: 1,
//     userId: 3,
//     document: "NuncProin.ppt",
//     pages: 91,
//     isBW: false,
//     price: 4739,
//   },
//   {
//     printerId: 2,
//     userId: 8,
//     document: "VestibulumAnteIpsum.png",
//     pages: 55,
//     isBW: true,
//     price: 5546,
//   },
//   {
//     printerId: 2,
//     userId: 7,
//     document: "LigulaSuspendisse.mp3",
//     pages: 56,
//     isBW: false,
//     price: 9533,
//   },
//   {
//     printerId: 5,
//     userId: 4,
//     document: "Massa.mp3",
//     pages: 69,
//     isBW: false,
//     price: 13953,
//   },
//   {
//     printerId: 2,
//     userId: 5,
//     document: "JustoSitAmet.xls",
//     pages: 6,
//     isBW: true,
//     price: 6564,
//   },
//   {
//     printerId: 4,
//     userId: 5,
//     document: "Amet.avi",
//     pages: 14,
//     isBW: false,
//     price: 5911,
//   },
//   {
//     printerId: 1,
//     userId: 3,
//     document: "PulvinarNullaPede.ppt",
//     pages: 97,
//     isBW: false,
//     price: 2935,
//   },
//   {
//     printerId: 2,
//     userId: 9,
//     document: "SemPraesent.jpeg",
//     pages: 61,
//     isBW: true,
//     price: 12538,
//   },
//   {
//     printerId: 3,
//     userId: 5,
//     document: "RutrumRutrum.avi",
//     pages: 37,
//     isBW: false,
//     price: 11430,
//   },
//   {
//     printerId: 3,
//     userId: 10,
//     document: "AliquetMassa.mp3",
//     pages: 23,
//     isBW: false,
//     price: 11401,
//   },
//   {
//     printerId: 1,
//     userId: 3,
//     document: "NullaFacilisi.avi",
//     pages: 55,
//     isBW: true,
//     price: 8418,
//   },
//   {
//     printerId: 2,
//     userId: 2,
//     document: "LectusAliquamSit.png",
//     pages: 80,
//     isBW: false,
//     price: 6995,
//   },
//   {
//     printerId: 3,
//     userId: 2,
//     document: "LacusMorbiQuis.tiff",
//     pages: 68,
//     isBW: true,
//     price: 8167,
//   },
//   {
//     printerId: 2,
//     userId: 10,
//     document: "CongueDiam.mp3",
//     pages: 22,
//     isBW: false,
//     price: 14499,
//   },
//   {
//     printerId: 1,
//     userId: 3,
//     document: "VelEst.xls",
//     pages: 91,
//     isBW: false,
//     price: 11526,
//   },
//   {
//     printerId: 3,
//     userId: 2,
//     document: "Eu.mp3",
//     pages: 76,
//     isBW: true,
//     price: 13492,
//   },
//   {
//     printerId: 1,
//     userId: 3,
//     document: "MolestieSedJusto.ppt",
//     pages: 93,
//     isBW: false,
//     price: 10306,
//   },
//   {
//     printerId: 4,
//     userId: 4,
//     document: "LacusAt.ppt",
//     pages: 8,
//     isBW: false,
//     price: 1721,
//   },
//   {
//     printerId: 2,
//     userId: 7,
//     document: "VariusNullaFacilisi.xls",
//     pages: 12,
//     isBW: false,
//     price: 5057,
//   },
//   {
//     printerId: 3,
//     userId: 1,
//     document: "ConsequatDuiNec.txt",
//     pages: 19,
//     isBW: true,
//     price: 11060,
//   },
//   {
//     printerId: 3,
//     userId: 5,
//     document: "CongueElementum.jpeg",
//     pages: 68,
//     isBW: false,
//     price: 6543,
//   },
//   {
//     printerId: 1,
//     userId: 1,
//     document: "NonummyIntegerNon.mp3",
//     pages: 72,
//     isBW: true,
//     price: 8492,
//   },
//   {
//     printerId: 4,
//     userId: 3,
//     document: "Egestas.mp3",
//     pages: 87,
//     isBW: false,
//     price: 11372,
//   },
//   {
//     printerId: 1,
//     userId: 7,
//     document: "Lacus.mov",
//     pages: 60,
//     isBW: false,
//     price: 3718,
//   },
//   {
//     printerId: 2,
//     userId: 10,
//     document: "AccumsanOdio.mp3",
//     pages: 1,
//     isBW: true,
//     price: 11100,
//   },
//   {
//     printerId: 1,
//     userId: 3,
//     document: "Nec.avi",
//     pages: 14,
//     isBW: true,
//     price: 14952,
//   },
//   {
//     printerId: 3,
//     userId: 10,
//     document: "UltricesMattis.ppt",
//     pages: 2,
//     isBW: true,
//     price: 9960,
//   },
//   {
//     printerId: 4,
//     userId: 1,
//     document: "Quis.jpeg",
//     pages: 64,
//     isBW: true,
//     price: 13193,
//   },
//   {
//     printerId: 1,
//     userId: 9,
//     document: "IdJusto.pdf",
//     pages: 75,
//     isBW: true,
//     price: 8776,
//   },
//   {
//     printerId: 2,
//     userId: 6,
//     document: "Morbi.mpeg",
//     pages: 71,
//     isBW: true,
//     price: 1385,
//   },
//   {
//     printerId: 2,
//     userId: 6,
//     document: "Curae.pdf",
//     pages: 8,
//     isBW: false,
//     price: 14480,
//   },
//   {
//     printerId: 5,
//     userId: 9,
//     document: "UtDolor.ppt",
//     pages: 87,
//     isBW: false,
//     price: 7320,
//   },
//   {
//     printerId: 2,
//     userId: 4,
//     document: "MontesNascetur.avi",
//     pages: 66,
//     isBW: false,
//     price: 14029,
//   },
//   {
//     printerId: 3,
//     userId: 1,
//     document: "Nec.ppt",
//     pages: 25,
//     isBW: false,
//     price: 6486,
//   },
//   {
//     printerId: 3,
//     userId: 1,
//     document: "DonecQuisOrci.avi",
//     pages: 22,
//     isBW: true,
//     price: 2474,
//   },
//   {
//     printerId: 1,
//     userId: 9,
//     document: "IpsumPrimis.gif",
//     pages: 68,
//     isBW: false,
//     price: 10091,
//   },
//   {
//     printerId: 5,
//     userId: 2,
//     document: "VestibulumRutrumRutrum.avi",
//     pages: 14,
//     isBW: true,
//     price: 4199,
//   },
//   {
//     printerId: 3,
//     userId: 10,
//     document: "Cursus.jpeg",
//     pages: 65,
//     isBW: true,
//     price: 11052,
//   },
//   {
//     printerId: 3,
//     userId: 3,
//     document: "Purus.jpeg",
//     pages: 85,
//     isBW: true,
//     price: 5844,
//   },
//   {
//     printerId: 5,
//     userId: 5,
//     document: "Sociis.tiff",
//     pages: 2,
//     isBW: true,
//     price: 3851,
//   },
//   {
//     printerId: 5,
//     userId: 4,
//     document: "Quam.ppt",
//     pages: 92,
//     isBW: true,
//     price: 9996,
//   },
//   {
//     printerId: 5,
//     userId: 10,
//     document: "OrciPedeVenenatis.ppt",
//     pages: 56,
//     isBW: true,
//     price: 9002,
//   },
//   {
//     printerId: 3,
//     userId: 7,
//     document: "PurusPhasellus.mp3",
//     pages: 59,
//     isBW: true,
//     price: 3898,
//   },
//   {
//     printerId: 5,
//     userId: 7,
//     document: "ConsequatIn.mp3",
//     pages: 97,
//     isBW: true,
//     price: 8922,
//   },
//   {
//     printerId: 4,
//     userId: 9,
//     document: "ProinEuMi.xls",
//     pages: 33,
//     isBW: false,
//     price: 12463,
//   },
// ];

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
  const activity = await Activity.create(req.body);
  res.status(StatusCodes.CREATED).json({ activity });
};

export const getAllActivitiesByDate = async (req, res) => {
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
