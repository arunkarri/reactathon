import React, { Component } from 'react';
import '../Main/events.css';
import $ from 'jquery';
import {NewsTicker} from "react-announcement-ticker"; 
// import Background from '../../assets/images/events.jpg';

class ScrollNews extends Component {
  constructor(){
    super();
    this.state={};
 };

  componentDidMount() {
    this.myScript();
  };




  render() {
    return (

      // <div className="holder">
      //   <h5 className="title">Latest Event News</h5>
      //   <ul id="ticker01">
      //     <li><a href="#">Reactathon Demos</a>&nbsp;@&nbsp;<span>16/07/2018</span></li>
      //     <li><a href="#">BlockChain Hackathon</a>&nbsp;@&nbsp;<span>29/07/2018</span></li>
      //     <li><a href="#">Mean Stack Hackathon</a>&nbsp;@&nbsp;<span>03/08/2018</span></li>
      //     <li><a href="#">AWS Hackathon</a>&nbsp;@&nbsp;<span>10/08/2018</span></li>
      //     <li><a href="#">Ionic Hackathon</a>&nbsp;@&nbsp;<span>17/08/2018</span></li>
      //     <li><a href="#">Android Hackathon</a>&nbsp;@&nbsp;<span>24/08/2018</span></li>
      //     <li><a href="#">Angular 5 Hackathon</a>&nbsp;@&nbsp;<span>30/08/2018</span></li>
      //     <li><a href="#">Nodejs Hackathon</a>&nbsp;@&nbsp;<span>03/09/2018</span></li>
      //   </ul>
      // </div>
      
        <NewsTicker
                        tickerBorderColor="#C0C0C0"

                        title={"Hackathon Latest News"}
                        titleBackground="black"
                        
                        newsList={[
                            {
                                text: "Reactathon Demos 16/07/2018",
                                link: "#"
                            },
                            {
                                text: "BlockChain Hackathon 29/07/2018",
                                link: "#"
                            },
                            {
                                text: "Mean Stack Hackathon 03/08/2018",
                                link: "#"
                            },
                            {
                                text: "AWS Hackathon 10/08/2018",
                                link: "#"
                            },
                            {
                                text: "Ionic Hackathon 17/08/2018",
                                link: "#"
                            },
                            {
                                text: "Android Hackathon 24/08/2018",
                                link: "#"
                            }
                        ]}
                    />
        

    );
  }

  myScript() {
    $.fn.liScroll = function (settings) {
      settings = $.extend({
        travelocity: 0.03
      }, settings);
      return this.each(function () {
        var $strip = $(this);
        $strip.addClass("newsticker")
        var stripHeight = 1;
        $strip.find("li").each(function (i) {
          stripHeight += $(this, i).outerHeight(true); 
        });
        var $mask = $strip.wrap("<div class='mask'></div>");
        var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");
        var containerHeight = $strip.parent().parent().height();	
        $strip.height(stripHeight);
        var totalTravel = stripHeight;
        var defTiming = totalTravel / settings.travelocity;	
        function scrollnews(spazio, tempo) {
          $strip.animate({ top: '-=' + spazio }, tempo, "linear", function () { $strip.css("top", containerHeight); scrollnews(totalTravel, defTiming); });
        }
        scrollnews(totalTravel, defTiming);
        $strip.hover(function () {
          $(this).stop();
        },
          function () {
            var offset = $(this).offset();
            var residualSpace = offset.top + stripHeight;
            var residualTime = residualSpace / settings.travelocity;
            scrollnews(residualSpace, residualTime);
          });
      });
    };

    $(function () {
      $("ul#ticker01").liScroll();
    });
  }
}


export default ScrollNews;
