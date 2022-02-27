const get= (req,res)=>{

    const blog = [
  
        {
          id: 2,
          desc: "./foodImg.webp",
          content: "Wait, What? Viral Hack Shows How To Cook Different Pasta In The Same Pan",
          content1:
            "A viral hack that surfaced online showed how to cook different pasta shapes together in the same vessel. Take a look!.",
          content2: "Food",
          content3: " / August 21,2017",
        },
        {
          id: 3,
          desc: "./foodImg.webp",
          content: "Wait, What? Viral Hack Shows How To Cook Different Pasta In The Same Pan",
          content1:
            "A viral hack that surfaced online showed how to cook different pasta shapes together in the same vessel. Take a look!.",
          content2: "Food",
          content3: " / August 21,2017",
        },
        {
          id: 4,
          desc: "./foodImg.webp",
          content: "Wait, What? Viral Hack Shows How To Cook Different Pasta In The Same Pan",
          content1:
            "A viral hack that surfaced online showed how to cook different pasta shapes together in the same vessel. Take a look!.",
          content2: "Food",
          content3: " / August 21,2017",
        },
        {
          id: 5,
          desc: "./foodImg.webp",
          content: "Wait, What? Viral Hack Shows How To Cook Different Pasta In The Same Pan",
          content1:
            "A viral hack that surfaced online showed how to cook different pasta shapes together in the same vessel. Take a look!.",
          content2: "Food",
          content3: " / August 21,2017",
        },
        {
          id: 6,
          desc: "./foodImg.webp",
          content: "Wait, What? Viral Hack Shows How To Cook Different Pasta In The Same Pan",
          content1:
            "A viral hack that surfaced online showed how to cook different pasta shapes together in the same vessel. Take a look!.",
          content2: "Food",
          content3: " / August 21,2017",
        },
        {
          id: 7,
          desc: "./foodImg.webp",
          content: "Wait, What? Viral Hack Shows How To Cook Different Pasta In The Same Pan",
          content1:
            "A viral hack that surfaced online showed how to cook different pasta shapes together in the same vessel. Take a look!.",
          content2: "Food",
          content3: " / August 21,2017",
        },
      ];
    
      if(req.params.id){
        const newGet = blog.filter(value=>value.id === Number(req.params.id));
        res.send(newGet);
      }
      else{
        res.send(blog);
      }

}
module.exports.blogCategoryGet=get;