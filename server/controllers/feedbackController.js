import FeedbackModel from "../models/FeedbackModel.js"


export const addFeedback = async (req, res) => {
    const {title, value} = req.body;
    console.log(req.user)
    try {
        const feedback = new FeedbackModel({
            title,
            value,
            user: req.user.user._id
        });

        await feedback.save(); 
        return res.status(200).json({status: 'ok'})
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json({status: 'failed', message: e.message})
    }
}

export const getAllFeedback = async (req, res) => {
    const feedbacks = await FeedbackModel.find().populate("user", "firstName lastName email");

    res.status(200).json({ feedbacks });
}

export const getFeedbackById = async (req, res) => {
    const feedback = await FeedbackModel.findById(req.params.id).populate("user", "firstName lastName email");
    res.status(200).json({ feedback });
}

export const getUserFeedback = async (req, res) => {
    console.log(req.user.user)
    const feedbacks = await FeedbackModel.find({user: req.user.user._id})
    res.status(200).json({feedbacks})
}

export const updateFeedback = async (req, res) => {
    const {value, id} = req.body;
    try {
        const comment = ({
            userId: req.user.user._id,
            firstName: req.user.user.firstName,
            lastName: req.user.user.lastName,
            email: req.user.user.email,
            comment: value,
            time: new Date
        });

        console.log(comment)
        await FeedbackModel.findByIdAndUpdate(id, {$push: {comments: comment}}, {new: true})
        return res.status(200).json({status: 'ok'})

        
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json({status: 'failed', message: e.message})
    }
}
