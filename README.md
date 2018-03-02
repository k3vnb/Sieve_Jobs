# _Capstone Project Version 1.0_  2/22/18

##### Static Version of upcoming React/Redux-based job interview preparation app.

#### By _**Kevin Boyle**_

##### Planning for this version can be found over at:
https://github.com/lemurriot/sieve_jobs_planning.git

##### Component HotModuleReplacementPlugin![updatedComponentTreeWithState](img/component_tree_state.png?raw=true)

#### On Lifting state
At present I have local state only in the Flashcard Control to toggle between views of a front and backside of a flashcard.  I could break the front & backsides into their own separate components, but I am not sure if it will be advantageous in the end. Both will render, ultimately, based on information passed down to the component via props, and they will be the same except the backside will render more props.

As noted in the previous planning session, Application state will be lifted up to App. It will contain the master state Object which I previously marked to look something like this:

1: {

Meta-Topic:  ‘Your Experience History’,

Meta-Answer: 'What you did to prepare for this job and what you'll do once you're hired."

Example-Questions: [‘Tell Me About Yourself…’, ‘Tell me about your work history’, ‘What career accomplishments are you most proud of?’, ‘What’s the biggest mistake you made in your career and what did you do to learn from it?’],

Recommended-Breakdown: [‘anchor’, ‘goal’, ‘obstacle’, ‘decision’, ‘result’],

User-Input-Example: [null, null, null, null, null]
},
2: {

  Meta-Topic:  ‘Your Skills’,

  Meta-Answer: 'What skills you have and how you have developed them',

  Example-Questions: [‘What experience do you have doing (a specific skill mentioned in job post)…’, ‘What is your biggest weakness:’, ‘What is your biggest strength?’, ‘Tell me about a problem you had in a previous job and how you solved it...’, 'What issues do you foresee facing in this position?'],

  Recommended-Breakdown: [‘anchor’, ‘goal’, ‘obstacle’, ‘decision’, ‘result’],

  User-Input-Example: [null, null, null, null, null]    
},
3: {
  Meta-Topic: 'Our Company & Your Possible Fit Here',

  Meta-Answer: 'What will you do for our company in this position',

  Example-Questions: ['Why are you interested in a job at our company?','How did you find out about our company?', 'What can you tell me about our company?', 'Why should we hire you?' ]

  Recommended-Breakdown: [‘anchor’, ‘goal’, ‘obstacle’, ‘decision’, ‘result’],

  User-Input-Example: [null, null, null, null, null]
}

At this time I have a partial view of how state and props will be passed down:
Flashcards: Flashcards will receive props, the front of flashcards will pull from Example-Questions randomly. The back of the flashcards will contain corresponding information, most importantly: it's meta-topic, meta-answer, and the user's input answers.  The static tutorial cards, for example, will contain everything except the user's input stories.

I think this data model is passable for drafting purposes, but there are things I'd like to incorporate that aren't included: multiple user-input answers for the same questions, or customized for the particular company they are applying for. And I am not sure I can reach all of those goals at this time, but I think I can build out a more solid data model to work from.
