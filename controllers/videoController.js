import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
    // await는 해당 function이 끝나기를 기다린 후 다음 function을 수행해줄뿐,
    // 성공했는지 실패해서 error가 발생했는지는 상관x
    // 따라서 try catch를 쓰는 것이 좋음
    try{
        const videos = await Video.find({});
        res.render("home", { pageTitle : "Home", videos});
    }catch(error){
        console.log(error);
        res.render("home", { pageTitle : "Home", videos: []});
    }
};

export const search = (req, res) => {
    
    const {query : { term : searchingBy }} = req;
    // const searchingBy = req.query.term;
    res.render("search", { pageTitle : "Search", searchingBy : searchingBy, videos});

};

export const getUpload = (req, res) => res.render("upload", { pageTitle : "Upload" });
export const postUpload = (req, res) => {
    const {
        body: { file, title, description} 
    } = req;
    // To Do : Upload and save video
    res.redirect(routes.videoDetail(432359));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" });