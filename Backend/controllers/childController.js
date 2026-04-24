import Child from '../models/Child.js';
import User from '../models/User.js';

export const createChild = async (req, res, next) => {
  try {
    const { name, dateOfBirth, gender } = req.body;

    const child = await Child.create({
      parent: req.user.id,
      name,
      dateOfBirth,
      gender,
    });

    // Add child to user
    await User.findByIdAndUpdate(req.user.id, {
      $push: { children: child._id },
    });

    res.status(201).json({ success: true, child });
  } catch (error) {
    next(error);
  }
};

export const getChildren = async (req, res, next) => {
  try {
    const children = await Child.find({ parent: req.user.id }).populate('growthRecords quizAttempts');
    res.json({ success: true, children });
  } catch (error) {
    next(error);
  }
};

export const getChild = async (req, res, next) => {
  try {
    const child = await Child.findOne({ _id: req.params.id, parent: req.user.id })
      .populate('growthRecords quizAttempts');
    
    if (!child) {
      return res.status(404).json({ success: false, error: 'Child not found' });
    }

    res.json({ success: true, child });
  } catch (error) {
    next(error);
  }
};
