import express from "express";
import Joi from "joi";
import products from "../models/products";

const productSchema = Joi.object({
    name: Joi.string().required()
})

export const getAll = async(req,res)=>{
    try{
        const data = await products.find()
        return res.status(200).json({
            message: "List Products",data
        })
    }catch(err){console.log(err)}
}
export const create = async(req,res)=>{
    try{
        const body = req.body
        const data = await products.create(body)
        if(!data){
            return res.status(404).json({message: "Error creating product"})
        }
        return res.status(200).json({message: "Created successfully!",data})
    }catch(err){console.log(err)}
}
export const get = async(req,res)=>{
    try{
        const id = req.params.id
        const data = await products.findById(id)
        if(!data){
            return res.status(404).json({message: "Not Found This Product"})
        }
        return res.status(200).json(data)
    }catch(err){console.log(err)}
}
export const remove = async(req,res)=>{
    try{
        const id = req.params.id
        await products.findByIdAndDelete(id)
            return res.status(200).json({message: "Removed"})
    }catch(err){console.log(err)}
}
export const update = async(req,res)=>{
    try{
        const id = req.params.id
        const body = req.body
        const data = await products.findByIdAndUpdate({_id:id},body,{new:true})
        if(!data){
            return res.status(404).json({message: "Can't update product"})
        }
        return res.status(200).json({message: "Product updated",data})
    }catch(err){console.log(err)}
}