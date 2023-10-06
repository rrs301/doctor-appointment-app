import axios from "axios";
const BASE_URL="http://192.168.0.217:1337/api"

const API_KEY="b5a038b7bf8455c0ad21790c2f7317610ada1cf992a1a2f8a457ddcfa8b54c5e2470258fca92b3f6d614c4b36a1afbb48b81ce8134cdb584dba6bd5770e795b4e2d8608a9ba03a59f56457a445044b1ec28081c3827ccda260250493dc82f4d42053e03e62ee6ad0cac15be9b9cfd9c84fefb4304e341f8c93594f958b432541"

const AxioInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization':"Bearer "+API_KEY
    }
})

const getSlider=()=>AxioInstance.get("/sliders?populate=*");

const getCategories=()=>AxioInstance.get("/categories?populate=*")

const getPremiumHospitals=()=>AxioInstance.get("/hospitals?filters[Premium][$eq]=true&populate=*")

const getHospitalsByCategory=(category)=>
AxioInstance.get("hospitals?filters[categories][Name][$in]="+category+"&populate=*");

const getDoctorsByCategory=(category)=>
AxioInstance.get("doctors?filters[categories][Name][$in]="+category+"&populate=*")

const createAppointment=(data)=>AxioInstance.post(
    "/appointments",data
)

const getAllHospital=()=>AxioInstance.get("hospitals?populate=*");

const getAllDoctors=()=>
AxioInstance.get("doctors?populate=*")


const getUserAppointments=(email)=>
AxioInstance.get("appointments?filters[email][$eq]="+email+"&populate=*");

export default{
    getSlider,
    getCategories,
    getPremiumHospitals,
    getHospitalsByCategory,
    getDoctorsByCategory,
    createAppointment,
    getAllHospital,
    getAllDoctors,
    getUserAppointments
}