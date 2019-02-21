// import React, { Component } from "react";
// import "../SideBar.css";
// import { IconButton } from "@material-ui/core";
// import { Search, Add } from "@material-ui/icons";
//
// class SideBar extends Component {
//   constructor(props) {
//     super(props);
//     this.viewQuestion = this.viewQuestion.bind(this);
//   }
//
//   viewQuestion() {
//     console.log("View question function fired!");
//   }
//
//   render() {
//     return (
//       <div id="sidebarsteve">
//         <div className="topnav">
//           <input type="text" placeholder="Find a question or topic.." />
//           <IconButton>
//             <Search />
//           </IconButton>
//         </div>
//         <br />
//         <button className="button">Create a new post!</button>
//         <br />
//         <br />
//         <div id="question-title">Questions</div>
//         <br />
//         <br />
//         <br />
//         <div className="question">
//           <div className="row">
//             <div className="columnA">
//               <IconButton className="upvote">
//                 <Add />
//               </IconButton>
//               <br />
//               <p>13</p>
//             </div>
//             <div className="columnB" onClick={this.viewQuestion}>
//               How do you perform the Pythagorean Theorem? What does it do?
//             </div>
//           </div>
//         </div>
//         <br />
//         <br />
//         <div className="question">
//           <div className="row">
//             <div className="columnA">
//               <IconButton className="upvote">
//                 <Add />
//               </IconButton>
//               <br />
//               <p>10</p>
//             </div>
//             <div className="columnB">What do I need to learn how to add?</div>
//           </div>
//         </div>
//         <br />
//         <br />
//         <div className="question">
//           <div className="row">
//             <div className="columnA">
//               <IconButton className="upvote">
//                 <Add />
//               </IconButton>
//               <br />
//               <p>7</p>
//             </div>
//             <div className="columnB">
//               If I have an isosceles triangle, what do I do with my other
//               triangles?
//             </div>
//           </div>
//         </div>
//         <br />
//         <br />
//         <div className="question">
//           <div className="row">
//             <div className="columnA">
//               <IconButton className="upvote">
//                 <Add />
//               </IconButton>
//               <br />
//               <p>5</p>
//             </div>
//             <div className="columnB">
//               Can someone please explain long division?
//             </div>
//           </div>
//         </div>
//         <br />
//         <br />
//         <div className="question">
//           <div className="row">
//             <div className="columnA">
//               <IconButton className="upvote">
//                 <Add />
//               </IconButton>
//               <br />
//               <p>2</p>
//             </div>
//             <div className="columnB">How do I carry a zero?</div>
//           </div>
//         </div>
//         <br />
//         <br />
//         <div className="question">
//           <div className="row">
//             <div className="columnA">
//               <IconButton className="upvote">
//                 <Add />
//               </IconButton>
//               <br />
//               <p>0</p>
//             </div>
//             <div className="columnB">
//               Is there any other way for me to find the integral between two
//               points on a parametric equation?
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default SideBar;
