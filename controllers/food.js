const get = (req,res) =>{

    const FoodPost = [
  
        {
          id: 1,
          desc: "https://frameru.com/wp-content/uploads/2021/06/Good-food-logo-template.jpg",
          content: "Fruit and Vegetable Juice: How Food Affects Health",
          content1:
            "Fruits and vegetables are “juicy foods” that consist mostly of water, but they also provide a variety of vitamins, minerals, phytonutrients, and a good amount of fiber that helps fill you up. Juice is another story. When whole produce is processed into juice most of the fiber is lost and you’re left with a less nutritious end product. And consider this: It takes a couple minutes to eat a 60-calorie orange but only a couple seconds to guzzle down a 110-calorie glass of OJ.",
          content2: "Bollywood",
          content3: " / Dec 12,2021",
        },
        {
          id: 2,
          desc: "https://frameru.com/wp-content/uploads/2021/06/Good-food-logo-template.jpg",
          content: "Fruit and Vegetable Juice: How Food Affects Health",
          content1:
            "Fruits and vegetables are “juicy foods” that consist mostly of water, but they also provide a variety of vitamins, minerals, phytonutrients, and a good amount of fiber that helps fill you up. Juice is another story. When whole produce is processed into juice most of the fiber is lost and you’re left with a less nutritious end product. And consider this: It takes a couple minutes to eat a 60-calorie orange but only a couple seconds to guzzle down a 110-calorie glass of OJ.",
          content2: "Bollywood",
          content3: " / Dec 12,2021",
        },
        {
          id: 3,
          desc: "https://frameru.com/wp-content/uploads/2021/06/Good-food-logo-template.jpg",
          content: "Fruit and Vegetable Juice: How Food Affects Health",
          content1:
            "Fruits and vegetables are “juicy foods” that consist mostly of water, but they also provide a variety of vitamins, minerals, phytonutrients, and a good amount of fiber that helps fill you up. Juice is another story. When whole produce is processed into juice most of the fiber is lost and you’re left with a less nutritious end product. And consider this: It takes a couple minutes to eat a 60-calorie orange but only a couple seconds to guzzle down a 110-calorie glass of OJ.",
          content2: "Bollywood",
          content3: " / Dec 12,2021",
        },
        {
          id: 4,
          desc: "https://frameru.com/wp-content/uploads/2021/06/Good-food-logo-template.jpg",
          content: "Fruit and Vegetable Juice: How Food Affects Health",
          content1:
            "Fruits and vegetables are “juicy foods” that consist mostly of water, but they also provide a variety of vitamins, minerals, phytonutrients, and a good amount of fiber that helps fill you up. Juice is another story. When whole produce is processed into juice most of the fiber is lost and you’re left with a less nutritious end product. And consider this: It takes a couple minutes to eat a 60-calorie orange but only a couple seconds to guzzle down a 110-calorie glass of OJ.",
          content2: "Bollywood",
          content3: " / Dec 12,2021",
        },
        {
          id: 5,
          desc: "https://frameru.com/wp-content/uploads/2021/06/Good-food-logo-template.jpg",
          content: "Fruit and Vegetable Juice: How Food Affects Health",
          content1:
            "Fruits and vegetables are “juicy foods” that consist mostly of water, but they also provide a variety of vitamins, minerals, phytonutrients, and a good amount of fiber that helps fill you up. Juice is another story. When whole produce is processed into juice most of the fiber is lost and you’re left with a less nutritious end product. And consider this: It takes a couple minutes to eat a 60-calorie orange but only a couple seconds to guzzle down a 110-calorie glass of OJ.",
          content2: "Bollywood",
          content3: " / Dec 12,2021",
        },
        {
          id: 6,
          desc: "https://frameru.com/wp-content/uploads/2021/06/Good-food-logo-template.jpg",
          content: "Fruit and Vegetable Juice: How Food Affects Health",
          content1:
            "Fruits and vegetables are “juicy foods” that consist mostly of water, but they also provide a variety of vitamins, minerals, phytonutrients, and a good amount of fiber that helps fill you up. Juice is another story. When whole produce is processed into juice most of the fiber is lost and you’re left with a less nutritious end product. And consider this: It takes a couple minutes to eat a 60-calorie orange but only a couple seconds to guzzle down a 110-calorie glass of OJ.",
          content2: "Bollywood",
          content3: " / Dec 12,2021",
        },
        {
          id: 7,
          desc: "https://frameru.com/wp-content/uploads/2021/06/Good-food-logo-template.jpg",
          content: "Fruit and Vegetable Juice: How Food Affects Health",
          content1:
            "Fruits and vegetables are “juicy foods” that consist mostly of water, but they also provide a variety of vitamins, minerals, phytonutrients, and a good amount of fiber that helps fill you up. Juice is another story. When whole produce is processed into juice most of the fiber is lost and you’re left with a less nutritious end product. And consider this: It takes a couple minutes to eat a 60-calorie orange but only a couple seconds to guzzle down a 110-calorie glass of OJ.",
          content2: "Bollywood",
          content3: " / Dec 12,2021",
        },
        {
          id: 8,
          desc: "https://frameru.com/wp-content/uploads/2021/06/Good-food-logo-template.jpg",
          content: "Fruit and Vegetable Juice: How Food Affects Health",
          content1:
            "Fruits and vegetables are “juicy foods” that consist mostly of water, but they also provide a variety of vitamins, minerals, phytonutrients, and a good amount of fiber that helps fill you up. Juice is another story. When whole produce is processed into juice most of the fiber is lost and you’re left with a less nutritious end product. And consider this: It takes a couple minutes to eat a 60-calorie orange but only a couple seconds to guzzle down a 110-calorie glass of OJ.",
          content2: "Bollywood",
          content3: " / Dec 12,2021",
        },
      ];

      if(req.params.id){
        const newGet = FoodPost.filter(value=>value.id === Number(req.params.id));
        res.send(newGet);
      }
      else{
        res.send(FoodPost);
      }
}

module.exports.foodGet=get;