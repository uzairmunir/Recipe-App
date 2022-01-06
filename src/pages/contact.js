import { useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { query } from "./about"
import RecipeList from "./RecipeList"

const Contact = () => {
  const data = useStaticQuery(query)
  const recipes = data?.allContentfulRecipes?.nodes
  return (
    <Layout>
      <Seo title="Contact Page" />
      <ContactWrapper>
        <RowLeft>
          <ContactHeading>Want To Get In Touch?</ContactHeading>
          <ContactText>
            Four dollar toast biodiesel plaid salvia actually pickled banjo
            bespoke mlkshk intelligentsia edison bulb synth.
          </ContactText>
          <ContactText>
            Cardigan prism bicycle rights put a bird on it deep v.
          </ContactText>
          <ContactText>
            Hashtag swag health goth air plant, raclette listicle fingerstache
            cold-pressed fanny pack bicycle rights cardigan poke.
          </ContactText>
        </RowLeft>
        <RowRight>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Your Email</Label>
              <Input type="text" id="email" placeholder="Your Email" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <textarea
                cols={8}
                rows={8}
                type="text"
                id="message"
                placeholder="Your Name"
              />
            </FormGroup>
          </Form>
        </RowRight>
      </ContactWrapper>
      <AboutRecipes>
        <Text>Look AT This Awesomesouce!</Text>
        <RecipeList recipes={recipes} />
      </AboutRecipes>
    </Layout>
  )
}

const ContactWrapper = styled.div`
  padding: 1rem 7rem;
  display: flex;
  justify-content: space-between;
  color: #333;
  @media (max-width: 770px) {
    padding: 1rem;
    flex-direction: column;
  }
  @media (min-width: 771px) and (max-width: 1024px) {
    padding: 1.5rem;
  }
`
const RowLeft = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.7;
`
const ContactHeading = styled.h3`
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: 500;
  font-family: san-serif;
  word-spacing: 0.5rem;
`
const ContactText = styled.h3`
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: san-serif;
  word-spacing: 0.5rem;
`
const RowRight = styled.div`
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 400px;
  width: 400px;
  display: flex;
  background-color: #fafaff;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 770px) {
    height: 400px;
    width: 80%;
    margin: auto;
  }
`
const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-family: san-serif;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 0;
`
const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: 1px solid gray;
`
const AboutRecipes = styled.div`
  padding: 1rem 7rem;
  margin: 1rem 0;
  @media (max-width: 770px) {
    padding: 1rem;
  }
  @media (min-width: 771px) and (max-width: 1024px) {
    padding: 1.5rem;
  }
`
const Text = styled.h4`
  text-align: center;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`

export default Contact
