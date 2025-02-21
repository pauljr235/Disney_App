import { useState } from 'react'
import {
  FAQContainer,
  FAQItem,
  FAQHeader,
  FAQContent,
  Icon,
  Title
} from './styles'

interface FAQItemType {
  question: string
  answer: string
}

const faqData: FAQItemType[] = [
  { question: 'Pergunta?', answer: 'A resposta da pergunta' },
  { question: 'Pergunta?', answer: 'A resposta da pergunta' },
  { question: 'Pergunta?', answer: 'A resposta da pergunta' }
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <FAQContainer className="container">
      <Title>Perguntas frequentes</Title>
      {faqData.map((item, index) => (
        <FAQItem key={index} onClick={() => toggleFAQ(index)}>
          <FAQHeader>
            <span>{item.question}</span>
            <Icon>{openIndex === index ? '−' : '+'}</Icon>
          </FAQHeader>
          {openIndex === index && <FAQContent>{item.answer}</FAQContent>}
        </FAQItem>
      ))}
    </FAQContainer>
  )
}

export default FAQ
