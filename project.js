const words = `
The idea of using design as a way of solving complex problems in a
simplified manner in sciences originated in the book, ‘The Sciences
of the Artificial’, authored by Herbert A. Simon in 1969. The same
purpose was achieved for design engineering by the book ‘Experiences
in Visual Thinking’, authored by Robert McKim in 1973. In 1987,
Peter Rowe’s book titled, “Design Thinking” described methods and
approaches that planners, designers, and architects use. The work of
Robert McKim was consolidated by Rolf Faste at Stanford University
during 1980s to 1990s and then, David M. Kelly adapted design
thinking for business interests. David M. Kelly founded IDEO in
1991. Most of the industries trying to solve customers’ problems and
address their needs are failing just because they look at the
problems outside in. However, many problems can be solved in a
better manner if we look at them inside out. 

<hr class="hr" />            
According to an article
in Forbes, a large number of problems faced by organizations
worldwide are multi-faceted and are a part of increasingly complex
business models. The expansion of global transactions, growth of
international partnerships and decentralized base of human resources
are leading to challenges that require a global outlook and hence, a
different outlook to solve the problems. Most of the challenges in
the world do not get solved because people trying to address those
problems focus too much on the problem statement. At other times,
the problem statement is overlooked and there is too much stress to
find a solution. Design thinking helps to gain a balance between the
problem statement and the solution developed. A design-oriented
mindset is not problem focused, but solution focused and action
oriented. It has to involve both analysis and imagination. Design
thinking is the way of resolving issues and dissolving problematic
situations by the help of design.

<hr class="hr" />            
Design thinking finds its application across a variety of professions. From sports, education
and research to business, management and design, design thinking is widely used by
professionals around the globe.
Design thinking is halfway between analytical thinking and intuitive thinking.
Analytical thinking involves purely deductive reasoning and inductive logical
reasoning that utilize quantitative methodologies to come to conclusions. However,
intuitive thinking refers to knowing something without any kind of reasoning.
These are two extreme kinds of thinking. Design thinking makes use of both the extremes
in an optimum manner. The intuitive thinking helps in invention for the future, whereas
analytical thinking to create something creative in the present, which is replicable. The
willingness to use these futuristic solutions is what is called abductive logic.

<hr class="hr" />            
Design thinking helps in businesses by optimizing the process of product creation,
marketing, and renewal of contracts. All these processes require a companywide focus on
the customer and hence, design thinking helps in these processes immensely. Design
thinking helps the design thinkers to develop deep empathy for their customers and to
create solutions that match their needs exactly. The solutions are not delivered just for the
sake of technology.

<hr class="hr" />            
The IT industry makes a lot of products that require trials and proof of concepts. The
industry needs to empathize with its users and not simply deploy technologies. IT is not
only about technology or products, but also its processes. The developers, analysts,
consultants, and managers have to brainstorm on possible ideas for solving the problems
of the clients. This is where design thinking helps a lot.

<hr class="hr" />            
The education sector can make the best use of design thinking by taking feedback from
students on their requirements, goals and challenges they are facing in the classroom. By
working on their feedback, the instructors can come up with solutions to address their
challenges.
For example, Michael Schurr, a 2nd grade instructor from New York, realized that his
students would be more comfortable with bulletin boards lowered. He also found the idea
of creating comfortable semi-private space for working students as it provided them space
to study. As a result, his students became more engaged and felt free to move.

<hr class="hr" />            
Design thinking helps in healthcare as well. The expenditure on healthcare by the
government and the cost of healthcare facilities is growing by the day. Experts worldwide
are concerned about how to bring quality healthcare to people at low cost.
Venice Family Clinic in Venice, California has come up with innovative solutions to the
challenge of opening a low-cost children’s clinic to serve the low-income families. Problems
of finance, transportation, and language barriers had to be solved. And all this had to be
done at low cost for the poor kids. Fostering good health along with profits was a challenge,
as it does not sound sustainable. Using design thinking, the inefficiencies in the system
and the perennial crises were addressed.
This was followed by mind-blowing innovations to serve the children. How they solved the
various issues will be seen in the later sections of the tutorial.

<hr class="hr" />
Design thinking promises to provide a realistic, practical, and innovative solutions to
problems of organizational concern and gives a systematic approach to finding
solutions. The distinguishing feature of design thinking is that it encourages solution
focused thinking or solution based thinking. The design thinker is supposed to have a clear
idea of the goal of the entire process. The design thinkers are not supposed to solve every
specific problem, but to start the process with the end goal in mind.
This methodology helps because by focusing on both the present and the future conditions
as well as the parameters of the problem statement, alternative solutions can be explored
simultaneously.            

`;

document.getElementById("words").innerHTML = words;

function searchword(event) {
  event.preventDefault();
  document.getElementById("message").innerHTML = "";
  let word = document.getElementById("search").value;
  word = word.trim(); 
  if (word == "" || word == false || word == null) {
    document.getElementById("message").innerHTML = "please enter a word";
  } else {
    if (words.includes(word)) {
      let new_words = words.replaceAll(
        word,
        `<span class='fw-bold shadow rounded rounded-3 border border-1 p-1 bg-transparent border-1 text-dark'>${word}</span>`
      );
      document.getElementById("words").innerHTML = new_words;
    } else {
      document.getElementById("message").innerHTML = "word not found!";
      document.getElementById("words").innerHTML = words;
    }
  }
}
