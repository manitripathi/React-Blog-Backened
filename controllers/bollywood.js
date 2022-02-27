const get=(req,res)=>{

  console.log(req.params);

    const BollywoodPost = [
      {
        id: 1,
        desc: "https://previews.123rf.com/images/julialazebnaya/julialazebnaya1907/julialazebnaya190700036/127107670-bollywood-word-on-gradient-background-indian-cinema-poster-with-text-and-spot-light-indian-cinematog.jpg",
        content: "It's official! Vicky & Kat are engaged",
        content1:
          "Vicky Kaushal-Katrina Kaif to wed in presence of family and close friends.As per our sources, the wedding festivities will kick off with a sangeet on December 7, followed by mehendi on December 8 and the wedding on December 9. The celebrations will conclude with a reception on December 10.",
        content2: "Bollywood",
        content3: " / Dec 12,2021",
      },
      {
        id: 2,
        desc: "https://previews.123rf.com/images/julialazebnaya/julialazebnaya1907/julialazebnaya190700036/127107670-bollywood-word-on-gradient-background-indian-cinema-poster-with-text-and-spot-light-indian-cinematog.jpg",
        content: "Virat Kohli and Anushka Sharma's wedding anniversary!",
        content1:
          "Anushka Sharma and Virat Kohli are busy being doting parents to Vamika Sharma Kohli. They are currently staying home and staying safe as the pandemic is ever on the rise. Anushka Sharma and Virat Kohli are also doing their bit by organizing donation to help beat the pandemic and have successfully collected more than Rs 3 crore for the same.",
        content2: "Bollywood",
        content3: " / Dec 11,2021",
      },
      {
        id: 3,
        desc: "https://previews.123rf.com/images/julialazebnaya/julialazebnaya1907/julialazebnaya190700036/127107670-bollywood-word-on-gradient-background-indian-cinema-poster-with-text-and-spot-light-indian-cinematog.jpg",
        content: "It's official! Vicky & Kat are engaged",
        content1:
          "Vicky Kaushal-Katrina Kaif to wed in presence of family and close friends.As per our sources, the wedding festivities will kick off with a sangeet on December 7, followed by mehendi on December 8 and the wedding on December 9. The celebrations will conclude with a reception on December 10.",
        content2: "Bollywood",
        content3: " / Dec 12,2021",
      },
      {
        id: 4,
        desc: "https://previews.123rf.com/images/julialazebnaya/julialazebnaya1907/julialazebnaya190700036/127107670-bollywood-word-on-gradient-background-indian-cinema-poster-with-text-and-spot-light-indian-cinematog.jpg",
        content: "It's official! Vicky & Kat are engaged",
        content1:
          "Vicky Kaushal-Katrina Kaif to wed in presence of family and close friends.As per our sources, the wedding festivities will kick off with a sangeet on December 7, followed by mehendi on December 8 and the wedding on December 9. The celebrations will conclude with a reception on December 10.",
        content2: "Bollywood",
        content3: " / Dec 12,2021",
      },
      {
        id: 5,
        desc: "https://previews.123rf.com/images/julialazebnaya/julialazebnaya1907/julialazebnaya190700036/127107670-bollywood-word-on-gradient-background-indian-cinema-poster-with-text-and-spot-light-indian-cinematog.jpg",
        content: "It's official! Vicky & Kat are engaged",
        content1:
          "Vicky Kaushal-Katrina Kaif to wed in presence of family and close friends.As per our sources, the wedding festivities will kick off with a sangeet on December 7, followed by mehendi on December 8 and the wedding on December 9. The celebrations will conclude with a reception on December 10.",
        content2: "Bollywood",
        content3: " / Dec 12,2021",
      },
      {
        id: 6,
        desc: "https://previews.123rf.com/images/julialazebnaya/julialazebnaya1907/julialazebnaya190700036/127107670-bollywood-word-on-gradient-background-indian-cinema-poster-with-text-and-spot-light-indian-cinematog.jpg",
        content: "It's official! Vicky & Kat are engaged",
        content1:
          "Vicky Kaushal-Katrina Kaif to wed in presence of family and close friends.As per our sources, the wedding festivities will kick off with a sangeet on December 7, followed by mehendi on December 8 and the wedding on December 9. The celebrations will conclude with a reception on December 10.",
        content2: "Bollywood",
        content3: " / Dec 12,2021",
      },
      {
        id: 7,
        desc: "https://previews.123rf.com/images/julialazebnaya/julialazebnaya1907/julialazebnaya190700036/127107670-bollywood-word-on-gradient-background-indian-cinema-poster-with-text-and-spot-light-indian-cinematog.jpg",
        content: "It's official! Vicky & Kat are engaged",
        content1:
          "Vicky Kaushal-Katrina Kaif to wed in presence of family and close friends.As per our sources, the wedding festivities will kick off with a sangeet on December 7, followed by mehendi on December 8 and the wedding on December 9. The celebrations will conclude with a reception on December 10.",
        content2: "Bollywood",
        content3: " / Dec 12,2021",
      },
      {
        id: 8,
        desc: "https://previews.123rf.com/images/julialazebnaya/julialazebnaya1907/julialazebnaya190700036/127107670-bollywood-word-on-gradient-background-indian-cinema-poster-with-text-and-spot-light-indian-cinematog.jpg",
        content: "It's official! Vicky & Kat are engaged",
        content1:
          "Vicky Kaushal-Katrina Kaif to wed in presence of family and close friends.As per our sources, the wedding festivities will kick off with a sangeet on December 7, followed by mehendi on December 8 and the wedding on December 9. The celebrations will conclude with a reception on December 10.",
        content2: "Bollywood",
        content3: " / Dec 12,2021",
      },
          
    ]

    if(req.params.id){
      const newGet = BollywoodPost.filter(value=>value.id === Number(req.params.id));
      res.send(newGet);
    }
    else{
      res.send(BollywoodPost);
    }
}

module.exports.bollywoodGet=get;