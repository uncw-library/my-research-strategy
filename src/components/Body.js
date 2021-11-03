import { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import AddKeywordButton from './AddKeywordButton'
import KeywordForm from './KeywordForm'
import ButtonRow from './ButtonRow'
import InstructionBlock from './InstructionBlock'
import ResearchQuestion from './ResearchQuestion'
import SearchStatement from './SearchStatement'

const instructionChoices = {
  createQuestion: {
    title: '1. Create Research Question',
    text: 'Start with a clear understanding of your research question or statement. You may have to find background information about your topic (see "Step 2" of <a href="https://library.uncw.edu/get_started" target="_blank">Get Started Researching</a>).<br/><br/> Write a short question or statement that describes your research. Enter the question or statement below.<br/><br/> For example, if you were interested in child development and violence, your research question might be something like question <em>How does violence in video games affect young adults?</em>'
  },
  identifyConcepts: {
    title: '2. Identify Key Concepts',
    text: 'Examine your question or statement and identify the most important concepts. These are your keywords. Enter keywords below.<br/><br/> If your keyword is a phrase, put “quotation marks” around it (<a href="https://www.youtube.com/watch?v=MwFElnYLQs4&feature=youtu.be" target="_blank">click here to learn why</a>).<br/><br/> For example, in the research question <em>How does violence in video games affect young adults?</em>,  the keywords would be: <ul><li>violence</li><li>"video games"</li><li>"young adults"</li></ul>'
  },
  findTerms: {
    title: '3. Find Related Terms',
    text: 'Enter one or two related terms or synonyms (words with similar meanings) in the boxes below for each of your key concepts.<br/><br/> For example, if your keyword was <em>"young adults"</em>, related terms might be: <ul><li>adolescents</li><li>teenagers</li><li>minors</li></ul> It\'s easy to find synonyms using an online thesaurus. Click \'Look up synonyms\' under any of your keywords below.<br/><br/> <a href="https://library.uncw.edu/resources/do_i_always_need_synonyms_keywords" target="_blank">Wait! Do I always need synonyms? Click here</a>'
  },
  search: {
    title: '4. Search',
    text: 'You have created an advanced search strategy! Copy the search statement from the bottom of this page.<br/><br/> You can now paste this search statement into any of the library’s databases, including the <a href="https://library.uncw.edu/" target="_blank">search box on the library homepage</a>. To find subject specific databases, go to our <a href="https://library.uncw.edu/guides/" target="_blank">Subject and Course Guides</a>, choose your subject, and then explore the recommended databases.<br/><br/> After searching in one or more of our library databases, consider the results. Are there more or fewer articles than you were hoping to find? Are they relevant to your topic? Reflect on your expectations as well, and ask yourself whether you are looking for the "<a href="https://library.uncw.edu/resources/one_perfect_source" target="_blank">one perfect source</a>."<br/><br/> If you are not finding what you are looking for, return to this page, tweak your search, and try again. Repeat until you are finding what you are looking for, or you can <a href="https://library.uncw.edu/ask" target="_blank">ask a librarian</a> for help anytime.'
  }
}

function Body () {
  // const [const name, updateFunc name] = useState('default value')
  const [activeView, setActiveView] = useState('createQuestion')
  const [instruction, setInstruction] = useState(instructionChoices.createQuestion)
  const [question, setQuestion] = useState('')
  const [query, setQuery] = useState('')
  const [keywords, setKeywords] = useState([
    { id: 0, keyword: '', synonym1: '', synonym2: '' },
    { id: 1, keyword: '', synonym1: '', synonym2: '' }
  ])

  const updateActiveView = (view) => {
    setActiveView(view)
    setInstruction(instructionChoices[view])
  }

  const updateTextBox = (textBox, id, value) => {
    const keywordsCopy = JSON.parse(JSON.stringify(keywords))
    if (textBox === 'keyword') {
      keywordsCopy[id].keyword = value
      if (keywordsCopy[id].keyword === '') {
        keywordsCopy[id].synonym1 = ''
        keywordsCopy[id].synonym2 = ''
      }
    }
    if (textBox === 'synonym1') keywordsCopy[id].synonym1 = value
    if (textBox === 'synonym2') keywordsCopy[id].synonym2 = value
    updateQuery(keywordsCopy)
    setKeywords(keywordsCopy)
  }

  const updateQuery = (keywordsCopy) => {
    let myQuery = ''
    keywordsCopy.forEach((data, index) => {
      const syn1 = (data.synonym1) ? ` OR ${data.synonym1}` : ''
      const syn2 = (data.synonym2) ? ` OR ${data.synonym2}` : ''
      if (index && data.keyword !== '') {
        myQuery += ` AND (${data.keyword}` + syn1 + syn2 + ')'
      } else if (data.keyword !== '') {
        myQuery += `(${data.keyword}` + syn1 + syn2 + ')'
      }
    })
    setQuery(myQuery)
  }

  const addKeywordForm = () => {
    const arrayID = keywords.length
    setKeywords([...keywords, { id: arrayID, keyword: '', synonym1: '', synonym2: '' }])
  }

  const startOver = () => {
    setActiveView('createQuestion')
    setInstruction(instructionChoices.createQuestion)
    setQuestion('')
    setKeywords([
      { id: 0, keyword: '', synonym1: '', synonym2: '' },
      { id: 1, keyword: '', synonym1: '', synonym2: '' }
    ])
    setQuery('')
  }

  return (
    <Grid container>
      <Grid item xl={2} lg={2}></Grid>
      <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
        <InstructionBlock instruction={instruction} activeView={activeView} />
        <ButtonRow activeView={activeView} question={question} query={query}
          updateActiveView={updateActiveView} startOver={startOver} />
        <ResearchQuestion question={question} setQuestion={setQuestion} />
        <Grid container>
          {keywords.map((data, index) => (
              <KeywordForm key={data.id} data={data} question={question} updateTextBox={updateTextBox} />
          ))}
          <AddKeywordButton addKeywordForm={addKeywordForm} />
        </Grid>
        <Grid container>
          <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
            <SearchStatement query={query} />
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <CopyToClipboard text={query}>
              <Button aria-label="Copy to clip board." color="primary" variant="contained" style={{ margin: 15, textTransform: 'capitalize' }}>4. Copy Search Statement to clipboard</Button>
            </CopyToClipboard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={2} lg={2}></Grid>
    </Grid>
  )
}

export default Body
