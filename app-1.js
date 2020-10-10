
  !function(){
    "use strict";
      
  
    angular.module('myApp-2', [])
    .controller('ListController', ListController)
    .controller('ShowController', ShowController)
    .service('ListService', ListService);
    
    ListController.$inject = ['ListService'];
    
    function ListController(ListService) {
      var itemAdder = this;
    
      itemAdder.itemName = "";
    
      itemAdder.addItem = function () {
        ListService.addItem(itemAdder.itemName);
      }
    }
    
    ShowController.$inject = ['ListService'];
    function ShowController(ListService) {
      var showList = this;
    
      showList.details = ListService.getItems();
    
      
    }
    
    function ListService() {
      var service = this;
      var details= [{name:'Unsolved questions in science',link:'https://www.quora.com/What-can-be-considered-as-the-top-5-unsolved-questions-in-science'},
  {name:'Art of problem solving',link:'https://www.quora.com/q/artofproblemsolving'},
  {name:'What do think about project loon',link:'https://www.quora.com/What-do-you-think-of-Google’s-Project-Loon-Will-it-be-feasible'},
  {name:'How to start a startup as a student',link:'https://www.quora.com/Im-a-student-creating-a-start-up-What-do-I-do-now'},
  {name:'best books for entrepreneurs',link:'https://www.quora.com/What-books-should-be-included-in-the-ultimate-“CEOs-library”-Include-an-Amazon-link-to-the-book'},
  {name:'Some mind blowing facts about google',link:'https://www.quora.com/What-are-some-mind-blowing-facts-about-Google'},
  {name:'How to get into Harvard',link:'https://www.quora.com/How-do-I-get-into-Harvard-1'},
  {name:'How to get into MIT',link:'https://www.quora.com/How-can-an-Indian-student-be-admitted-by-MIT-for-undergraduate-studies'},
  {name:'Best books on physics',link:'https://www.quora.com/Which-book-is-best-book-for-physics'},
  {name:'Best books on maths',link:'https://www.quora.com/What-can-be-considered-as-the-top-5-unsolved-questions-in-science'},
  {name:'How to build a gaming PC',link:'https://www.quora.com/How-do-I-build-a-Gaming-PC-in-India'},
  {name:'How to become a pilot',link:'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiVpcaMjaXsAhXBzDgGHTEEDVEQFjAEegQIExAC&url=https%3A%2F%2Fwww.quora.com%2FWhat-are-some-good-books-on-math&usg=AOvVaw2L7UsxWNVIf5ZGchwB_44k'},
  {name:'What are some examples of ancient and medieval technology',link:'https://www.quora.com/Technology/What-are-some-fascinating-examples-of-ancient-or-medieval-technology/answer/Achilleas-Vortselas'},
  {name:'Why is factoring numbers into primes a difficult problem',link:'https://www.quora.com/Prime-Numbers/Why-is-factoring-numbers-into-primes-a-difficult-problem/answer/Alon-Amit'},
  {name:'How does cyber warfare work',link:'https://www.quora.com/Cyber-Warfare/How-does-cyber-warfare-work/answer/Andy-Manoske'},
  {name:"What are lead's effect on the brain",link:'https://www.quora.com/Neuroscience-1/What-are-leads-effects-on-the-brain/answer/Krutikaa-Jawanjal'},
  {name:'How do you publish a research paper',link:'https://www.quora.com/Academic-Papers/How-do-you-publish-a-research-paper/answer/Matan-Shelomi'},
  {name:'What is an intuitive explanation of Bayes rule',link:'https://www.quora.com/Probability/What-is-an-intuitive-explanation-of-Bayes-Rule/answer/Michael-Hochster'},
  {name:'What are the most ridiculous startup ideas that became sucessfull',link:'https://www.quora.com/Startups/What-were-the-most-ridiculous-startup-ideas-that-eventually-became-successful/answer/Michael-Wolfe'},
  {name:'How useful will google glass be',link:'https://www.quora.com/Google-Glass-4/How-useful-will-Google-Glass-be/answer/Robert-Scoble-1'}];
    
      service.addItem = function (itemName) {
        var item = {
          name: itemName,
          link: "#"
        };
        details.push(item);
      };    
      service.getItems = function () {
        return details;
      };
    }
}();