import React, { Component } from 'react'
import { AddKeywordForm, AddAdditionalKeywordButton, ButtonControls,
         Instructions, ResearchQuestion, SearchStatement } from '../Componenets'
import { Button, Grid } from 'material-ui'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeView: 'createQuestion',
            //activeImage: {name: 'Question', location: './images/question-small.png'},
            activeDireactions: {title: '1. Create Research Question',
                                text: 'Start with a clear understanding of your research question or statement. '
                                    + 'You may have to find background information about your topic (see "Step 2" of '
                                    + '<a href="https://library.uncw.edu/get_started" target="_blank">Get Started Researching</a>).<br/><br/>'
                                    + 'Write a short question or statement that describes your research. Enter the question or statement below.<br/><br/>'
                                    + 'For example, if you were interested in child development and violence, '
                                    + 'your research question might be something like question '
                                    + '<em>How does violence in video games affect young adults?</em>'},
            question: '',
            keywords: [{id: 0, keyword: '', synonym1: '', synonym2: ''},{id: 1, keyword: '', synonym1: '', synonym2: ''}],
            searchStatement: ''
        }
        this.updateActiveView = this.updateActiveView.bind(this)
        this.updateTextBox = this.updateTextBox.bind(this)
        this.updateSearchStatement = this.updateSearchStatement.bind(this)
        this.addAdditionalKeywordForm = this.addAdditionalKeywordForm.bind(this)
        this.startOver = this.startOver.bind(this)
    }

    updateActiveView(view) {
      this.setState({activeView: view})
      switch (view) {
        case 'createQuestion':
          this.setState({
            //activeImage: {name: 'Question', location: './images/question-small.png'},
            activeDireactions: {title: '1. Create Research Question',
                                text: 'Start with a clear understanding of your research question or statement. '
                                    + 'You may have to find background information about your topic (see "Step 2" of '
                                    + '<a href="https://library.uncw.edu/get_started" target="_blank">Get Started Researching</a>).<br/><br/>'
                                    + 'Write a short question or statement that describes your research. Enter the question or statement below.<br/><br/>'
                                    + 'For example, if you were interested in child development and violence, '
                                    + 'your research question might be something like question '
                                    + '<em>How does violence in video games affect young adults?</em>'},
          })
          break;
        case 'identifyConcepts':
          this.setState({
            //activeImage: {name: 'Question', location: './images/keywords-small.png'},
            activeDireactions: {title: '2. Identify Key Concepts',
                                text: 'Examine your question or statement and identify the most important concepts. These are your keywords. Enter keywords below.<br/><br/>'
                                    + 'If your keyword is a phrase, put “quotation marks” around it ('
                                    + '<a href="https://www.youtube.com/watch?v=MwFElnYLQs4&feature=youtu.be" target="_blank">click here to learn why</a>).<br/><br/>'
                                    + 'For example, in the research question <em>How does violence in video games affect young adults?</em>,  the keywords would be: '
                                    + '<ul><li>violence</li><li>"video games"</li><li>"young adults"</li></ul>'}
          })
          break;
        case 'findTerms':
          this.setState({
            //activeImage: {name: 'Question', location: './images/synonyms-small.png'},
            activeDireactions: {title: '3. Find Related Terms',
                                text: 'Enter one or two related terms or synonyms (words with similar meanings) in the boxes below for each of your key concepts.<br/><br/>'
                                    + 'For example, if your keyword was <em>"young adults"</em>, related terms might be:'
                                    + '<ul><li>adolescents</li><li>teenagers</li><li>minors</li></ul>'
                                    + 'It\'s easy to find synonyms using an online thesaurus. Click \'Look up synonyms\' under any of your keywords below.<br/><br/>'
                                    + '<a href="https://library.uncw.edu/resources/do_i_always_need_synonyms_keywords" target="_blank">Wait! Do I always need synonyms? Click here</a>'}
          })
          break;
        case 'search':
          this.setState({
            //activeImage: {name: 'Question', location: './images/synonyms-small.png'},
            activeDireactions: {title: '4. Search',
                                text: 'You have created an advanced search strategy! Copy the search statement from the bottom of this page.<br/><br/>'
                                    + 'You can now paste this search statement into any of the library’s databases, including the '
                                    + '<a href="https://library.uncw.edu/" target="_blank">search box on the library homepage</a>.<br/><br/>'
                                    + 'Not finding what you are looking for? '
                                    + '<a href="https://library.uncw.edu/ask" target="_blank">Ask a librarian</a>!'}
          })
          break;
        default:
      }
    }

    updateTextBox(event, textBox, id) {
      let keywordsCopy = JSON.parse(JSON.stringify(this.state.keywords))
      if (textBox === 'keyword' || textBox === 'synonym1' || textBox === 'synonym2') {
        if (textBox === 'keyword') {
          keywordsCopy[id].keyword = event.target.value
          if (keywordsCopy[id].keyword === '') {
            keywordsCopy[id].synonym1 = ''
            keywordsCopy[id].synonym2 = ''
           }
        }
        if (textBox === 'synonym1') keywordsCopy[id].synonym1 = event.target.value
        if (textBox === 'synonym2') keywordsCopy[id].synonym2 = event.target.value
        this.setState({ keywords: keywordsCopy})
        this.updateSearchStatement(keywordsCopy)
      } else {
        this.setState({[textBox]: event.target.value})
      }
    }

    updateSearchStatement(keywordsCopy) {
        var mySearchStatement = ''
          keywordsCopy.forEach((data, index) => {
              var syn1 = (data.synonym1) ? ` OR ${data.synonym1}` : ''
              var syn2 = (data.synonym2) ? ` OR ${data.synonym2}` : ''
              if (index && data.keyword !== '' ) {
                mySearchStatement += ` AND (${data.keyword}` + syn1 + syn2 + ')'
              } else if (data.keyword !== '') {
                mySearchStatement += `(${data.keyword}` + syn1 + syn2 + ')'
              }
            }
          )
        this.setState({ searchStatement: mySearchStatement })
    }

    addAdditionalKeywordForm() {
      var arrayID = this.state.keywords.length
      this.setState({ keywords: [...this.state.keywords, {id: arrayID, keyword: '', synonym1: '', synonym2: ''}]})
    }

    startOver() {
      this.setState({
          activeView: 'createQuestion',
          //activeImage: {name: 'Question', location: './images/question-small.png'},
          activeDireactions: {title: '1. Create Research Question',
                              text: 'Start with a clear understanding of your research question or statement. '
                                  + 'You may have to find background information about your topic (see "Step 2" of '
                                  + '<a href="https://library.uncw.edu/get_started" target="_blank">Get Started Researching</a>).<br/><br/>'
                                  + 'Write a short question or statement that describes your research. Enter the question or statement below.<br/><br/>'
                                  + 'For example, if you were interested in child development and violence, '
                                  + 'your research question might be something like question '
                                  + '<em>How does violence in video games affect young adults?</em>'},
          question: '',
          keywords: [{id: 0, keyword: '', synonym1: '', synonym2: ''}],
          searchStatement: ''
      })
    }

    render() {
        return (
            <Grid container>
                <Grid item xl={2} lg={2}></Grid>
                <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                    <Instructions activeImage={this.state.activeImage} activeDireactions={this.state.activeDireactions} activeView={this.state.activeView} />
                    <ButtonControls activeView={this.state.activeView} question={this.state.question} searchStatement={this.state.searchStatement}
                                    updateActiveView={this.updateActiveView} startOver={this.startOver}/>
                    <ResearchQuestion question={this.state.question} updateTextBox={this.updateTextBox}/>
                    <Grid container>
                      {
                        this.state.keywords.map(data => (
                          <AddKeywordForm key={data.id} data={data} updateTextBox={this.updateTextBox} question={this.state.question}/>
                        ))
                      }
                      <AddAdditionalKeywordButton addAdditionalKeywordForm={this.addAdditionalKeywordForm} />
                    </Grid>

                    <Grid container>
                      <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                        <SearchStatement searchStatement={this.state.searchStatement}/>
                      </Grid>
                      <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                      <CopyToClipboard text={this.state.searchStatement}>
                        <Button color="primary" variant="raised" style={{margin: 15, textTransform: 'capitalize'}}>4. Copy Search Statement to clipboard</Button>
                      </CopyToClipboard>
                      </Grid>
                    </Grid>


                </Grid>
                <Grid item xl={2} lg={2}></Grid>
            </Grid>
        )
    }

}

export default Body
