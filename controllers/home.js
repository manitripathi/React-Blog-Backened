const get=(req,res)=>{
    
    const FitnessPost =[
        {
            id: 1,
            desc: "https://cdn-badcn.nitrocdn.com/zsttTpmwulSPKaBsvcIRAogxFBWphrEd/assets/static/optimized/rev-4d38d75/wp-content/uploads/2019/06/Fitness-is-30-workout-70-Diet.jpg",
            content: "Fitness is never about looking slim",
            content1:
              "Talking about her journey, the 32-year-old revealed that things took a U-turn in 2019, when her husband was diagnosed with a blockage in the artery due to “unhealthy lifestyle.That day I realised the importance of staying healthy and fit. I decided to take a Zumba certification and soon became a licensed instructor of over 100 regular members,” the Pune-based Fittr Nutrition and Training coach said.",
            content2: "Bollywood",
            content3: " / Dec 12,2021",
          },
          {
            id: 2,
            desc: "https://cdn-badcn.nitrocdn.com/zsttTpmwulSPKaBsvcIRAogxFBWphrEd/assets/static/optimized/rev-4d38d75/wp-content/uploads/2019/06/Fitness-is-30-workout-70-Diet.jpg",
            content: "Fitness is never about looking slim",
            content1:
              "Talking about her journey, the 32-year-old revealed that things took a U-turn in 2019, when her husband was diagnosed with a blockage in the artery due to “unhealthy lifestyle.That day I realised the importance of staying healthy and fit. I decided to take a Zumba certification and soon became a licensed instructor of over 100 regular members,” the Pune-based Fittr Nutrition and Training coach said.",
            content2: "Bollywood",
            content3: " / Dec 12,2021",
          },
          {
            id: 3,
            desc: "https://cdn-badcn.nitrocdn.com/zsttTpmwulSPKaBsvcIRAogxFBWphrEd/assets/static/optimized/rev-4d38d75/wp-content/uploads/2019/06/Fitness-is-30-workout-70-Diet.jpg",
            content: "Fitness is never about looking slim",
            content1:
              "Talking about her journey, the 32-year-old revealed that things took a U-turn in 2019, when her husband was diagnosed with a blockage in the artery due to “unhealthy lifestyle.That day I realised the importance of staying healthy and fit. I decided to take a Zumba certification and soon became a licensed instructor of over 100 regular members,” the Pune-based Fittr Nutrition and Training coach said.",
            content2: "Bollywood",
            content3: " / Dec 12,2021",
          },
        ]
        if(req.params.id){
            const newGet = FitnessPost.filter(value=>value.id === Number(req.params.id));
            res.send(newGet);
          }
          else{
            res.send(FitnessPost);
          }
}

module.exports.homeGet = get;