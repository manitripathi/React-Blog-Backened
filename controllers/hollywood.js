const get=(req,res)=>{
    
  const HollywoodPost =[
            {
                    id: 1,
                    desc: "https://akm-img-a-in.tosshub.com/indiatoday/hollywood_sign_6487_071315022203.jpg?3BuiklZYS3GTfpQkgured1Q_HCPV82Lo&size=770:433",
                    content: "Batman: The Animated Series’ Audio Drama in the Works with Original Cast",
                    content1:
                      "Batman: The Animated Series ran for 85 episodes from 1992-95 and also included Mark Hamill as Joker and introduced the world to the show’s breakout character, Harley Quinn (Arleen Sorkin).",
                    content2: "Hollywood",
                    content3: " / Dec 12,2021",
                  },
                  {
                    id: 2,
                    desc: "https://akm-img-a-in.tosshub.com/indiatoday/hollywood_sign_6487_071315022203.jpg?3BuiklZYS3GTfpQkgured1Q_HCPV82Lo&size=770:433",
                    content: "Batman: The Animated Series’ Audio Drama in the Works with Original Cast",
                    content1:
                      "Batman: The Animated Series ran for 85 episodes from 1992-95 and also included Mark Hamill as Joker and introduced the world to the show’s breakout character, Harley Quinn (Arleen Sorkin).",
                    content2: "Hollywood",
                    content3: " / Dec 12,2021",
                  },
                  {
                    id: 3,
                    desc: "https://akm-img-a-in.tosshub.com/indiatoday/hollywood_sign_6487_071315022203.jpg?3BuiklZYS3GTfpQkgured1Q_HCPV82Lo&size=770:433",
                    content: "Batman: The Animated Series’ Audio Drama in the Works with Original Cast",
                    content1:
                      "Batman: The Animated Series ran for 85 episodes from 1992-95 and also included Mark Hamill as Joker and introduced the world to the show’s breakout character, Harley Quinn (Arleen Sorkin).",
                    content2: "Hollywood",
                    content3: " / Dec 12,2021",
                  },
                  {
                    id: 4,
                    desc: "https://akm-img-a-in.tosshub.com/indiatoday/hollywood_sign_6487_071315022203.jpg?3BuiklZYS3GTfpQkgured1Q_HCPV82Lo&size=770:433",
                    content: "Batman: The Animated Series’ Audio Drama in the Works with Original Cast",
                    content1:
                      "Batman: The Animated Series ran for 85 episodes from 1992-95 and also included Mark Hamill as Joker and introduced the world to the show’s breakout character, Harley Quinn (Arleen Sorkin).",
                    content2: "Hollywood",
                    content3: " / Dec 12,2021",
                  },
                  {
                    id: 5,
                    desc: "https://akm-img-a-in.tosshub.com/indiatoday/hollywood_sign_6487_071315022203.jpg?3BuiklZYS3GTfpQkgured1Q_HCPV82Lo&size=770:433",
                    content: "Batman: The Animated Series’ Audio Drama in the Works with Original Cast",
                    content1:
                      "Batman: The Animated Series ran for 85 episodes from 1992-95 and also included Mark Hamill as Joker and introduced the world to the show’s breakout character, Harley Quinn (Arleen Sorkin).",
                    content2: "Hollywood",
                    content3: " / Dec 12,2021",
                  },
                  {
                    id: 6,
                    desc: "https://akm-img-a-in.tosshub.com/indiatoday/hollywood_sign_6487_071315022203.jpg?3BuiklZYS3GTfpQkgured1Q_HCPV82Lo&size=770:433",
                    content: "Batman: The Animated Series’ Audio Drama in the Works with Original Cast",
                    content1:
                      "Batman: The Animated Series ran for 85 episodes from 1992-95 and also included Mark Hamill as Joker and introduced the world to the show’s breakout character, Harley Quinn (Arleen Sorkin).",
                    content2: "Hollywood",
                    content3: " / Dec 12,2021",    },
                  {
                    id: 7,
                    desc: "https://akm-img-a-in.tosshub.com/indiatoday/hollywood_sign_6487_071315022203.jpg?3BuiklZYS3GTfpQkgured1Q_HCPV82Lo&size=770:433",
                    content: "Batman: The Animated Series’ Audio Drama in the Works with Original Cast",
                    content1:
                      "Batman: The Animated Series ran for 85 episodes from 1992-95 and also included Mark Hamill as Joker and introduced the world to the show’s breakout character, Harley Quinn (Arleen Sorkin).",
                    content2: "Hollywood",
                    content3: " / Dec 12,2021",
                  },
                  {
                    id: 8,
                    desc: "https://akm-img-a-in.tosshub.com/indiatoday/hollywood_sign_6487_071315022203.jpg?3BuiklZYS3GTfpQkgured1Q_HCPV82Lo&size=770:433",
                    content: "Batman: The Animated Series’ Audio Drama in the Works with Original Cast",
                    content1:
                      "Batman: The Animated Series ran for 85 episodes from 1992-95 and also included Mark Hamill as Joker and introduced the world to the show’s breakout character, Harley Quinn (Arleen Sorkin).",
                    content2: "Hollywood",
                    content3: " / Dec 12,2021",
                  },
                  {
                    id: 9,
                    desc: "https://akm-img-a-in.tosshub.com/indiatoday/hollywood_sign_6487_071315022203.jpg?3BuiklZYS3GTfpQkgured1Q_HCPV82Lo&size=770:433",
                    content: "Batman: The Animated Series’ Audio Drama in the Works with Original Cast",
                    content1:
                      "Batman: The Animated Series ran for 85 episodes from 1992-95 and also included Mark Hamill as Joker and introduced the world to the show’s breakout character, Harley Quinn (Arleen Sorkin).",
                    content2: "Hollywood",
                    content3: " / Dec 12,2021",
                  },
        ]
        if(req.params.id){
          const newGet = HollywoodPost.filter(value=>value.id === Number(req.params.id));
          res.send(newGet);
        }
        else{
          res.send(HollywoodPost);
        }
}
module.exports.hollywoodGet=get;