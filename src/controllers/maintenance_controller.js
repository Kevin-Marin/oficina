import Maintenance from "../models/maintenance_model.js";

export const store = async (req, res) => {
  try {
    const content = await Maintenance.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const index = async (req, res) => {
  try {
    const content = await Maintenance.find().exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const content = await Maintenance.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const content = await Maintenance.findByIdAndUpdate(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const content = await Maintenance.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};