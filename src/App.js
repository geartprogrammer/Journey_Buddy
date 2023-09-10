import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";

import image1 from "./assets/design1.png";
import image3 from "./assets/design3.png";
import image4 from "./assets/design4.png";
import image5 from "./assets/design5.png";
import image6 from "./assets/design6.png";
import image7 from "./assets/design7.png";
import image8 from "./assets/design8.png";
import image10 from "./assets/design10.png";
import image11 from "./assets/design11.png";
import image18 from "./assets/design18.png";
import logo from "./assets/logo2.png";
import loadingGif from "./assets/loading2.gif";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  min-height: 100vh;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  &::-webkit-scrollbar {
    display: none;
    width: 0px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

const MainContent = styled.div`
  flex-basis: 70%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  background-image: white;
  );
  background-size: 400% 400%;
  color: black;
  width: 100%;
  height: 100%;

  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    20% {
      background-position: 50% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media screen and (max-width: 1320px) {
    flex-basis: 60%;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 50px;
    overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-top: 4rem;
  color: black;
  font-weight: bold;
  // text-shadow: 0 0 10px #000;
  /* text-shadow: #f4ffcf 1px 0 10px; */
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  fon-family: "Roboto", sans-serif;
`;

const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;

  top: 0;
`;

const Loading = styled.p`
  color: gradient;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;

  &::after {
    content: '';
    display: block;
    width: 12rem;
    height: 12rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${loadingGif});
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  font-weight: 600;
  color: #000fs0;
  padding: 0.4rem;
`;

const Input = styled.input`
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  font-size: 0.8rem;
  color: #000;
  width: calc(100% - 2rem);
  padding: 0.6rem 0.6rem;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
  }
`;

const Select = styled.select`
  padding: 0.6rem 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 0.8rem;
  width: calc(100% - 0.6rem);
  color: #000;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  width: 100%;
  border: none;
  font-size: 1rem;

  background-color: #FF5C5B;
  color: #fff;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #00bf2f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &.loading {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ResponseTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  z-index: 1;
`;

const ResponseText = styled.div`
  width: 80%;
  font-size: 1rem;
  font-weight: normal;
  color: black;
  border-radius: 0.4rem;
  padding: 1rem;
  margin: 2rem;
  z-index: 1;
  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    font-size: 0.9rem;
    z-index: 1;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }

  a {
    color: orange;
    text-decoration: underline;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const LanguageSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const LanguageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const TopLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 0.4rem;
`;

const LanguageOption = styled.div`
  display: flex;
  font-size: 1.4rem;
  flex-direction: column;
  align-items: center;
  margin-right: 0.2rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  &.selected {
    border: 1px solid #007bff;
    border-radius: 0.4rem;
  }

  &:hover {
    border-color: #333;
    border-radius: 0.4rem;
  }
`;

const PinButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 4px;
  font-size: 12px;
  letter-spacing: 0px;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: 1px solid transparent;

  &::before {
    content: "📍";
    margin-right: 4px;
    left: 8px;
    top: 8px;
  }

  &:hover {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 16px;
`;

// Button component
const ActionButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 4px;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: 1px solid transparent;

  &::before {
    content: "⬇️";
    margin-right: 4px;
    left: 8px;
    top: 8px;
  }

  &:hover {
    background-color: #dadada;
    border: 1px solid #ccc;
  }
`;

const InterestsContainerNew = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const Image1 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image1});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 900px;
    height: 300px;
   }
`;

const Logo = styled.div`
  
@media (min-width: 320px) {
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 43px;
  left: 50%; /* Set the left position to 50% */
  transform: translateX(-50%); /* Use transform to adjust the position */
  width: 314px;
  height: 44px;
}
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 53px;
  right: 28%;
  width: 488px;
  height: 67px;
   }
`;

const Image3 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image3});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 138px;
    right: 72px;
    width: 150px;
    height: 153px;
   }
`;

const Image4 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image4});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 365px;
    right: 104px;
    width: 173px;
    height: 89px;
    transform: rotate(246deg);
   }
`;

const Image5 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image5});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 123px;
    right: 43px;
    width: 196px;
    height: 355px;
   }
`;

const Image6 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image6});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 35%;
    left: 50px;
    width: 4px;
    height: 480px;
   }
`;

const Image7 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image7});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 140px;
    height: 250px;
    transform: rotate(180deg);
   }
`;

const Image77 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image7});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 140px;
    height: 250px;
   }
`;

const Image8 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image8});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 68%;
    right: 35px;
    width: 125px;
    height: 131px;
    opacity: 34%;
   }
`;

const Image19 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image8});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 75%;
    right: 250px;
    width: 125px;
    height: 131px;
    opacity: 34%;
   }
`;

const Image10 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image10});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 192px;
    left: 0px;
    width: 137px;
    height: 321px;
   }
`;

const Image11 = styled.div`

  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) {   background-image: url(${image11});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 214px;
  left: 19px;
  width: 56px;
  height: 99px; }
`;

const Image18 = styled.div`
  
  @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
  @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
  @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { 
    background-image: url(${image18});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 42%;
  right: 7px;
  width: 141px;
  height: 150px;
   }
`;

const InterestItemNew = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 4px;
  margin-right: 4px;
  margin-bottom: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  border-radius: 0.4rem;

  &:hover {
    border-color: #333;
    border-radius: 0.4rem;
  }

  &.selected {
    border: 1px solid #007bff;
    border-radius: 0.4rem;
  }
`;

const InterestName = styled.span`
  margin-left: 6px;
  margin-right: 6px;
`;

const InterestEmoji = styled.span`
  font-size: 16px;
`;

const LineBreak = styled.div`
  margin-bottom: 20px; /* Adjust the margin as needed */
`;

const Panel = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
  position: fixed;
  width: 28%;
  top: 0;
  background: rgb(251,250,246);
  background: linear-gradient(293deg, rgba(251,250,246,1) 0%, rgba(255,184,184,1) 100%);

  right: 0;
  overflow-y: auto;

  @media screen and (max-width: 1320px) {
    flex-basis: calc(40% - 2.2rem);
    width: calc(40% - 2.2rem);
    position: relative;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    margin: 0 auto;
  }

  @media (max-height: 1500px) {
    width: calc(100% - 2rem);
    margin: 0 auto;
    overflow-y: scroll;
    position: relative;
  }
`;

const CuisineTypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const CuisineType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.4rem;
  margin-bottom: 5px;
  margin-right: 5px;
  border-radius: 0.4rem;
  border: 1px solid transparent;
  &.selected {
    border: 1px solid #007bff;
    border-radius: 0.4rem;
  }
  &:hover {
    border-color: #333;
    border-radius: 0.4rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const Info = styled.div`
  margin: 1rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #333;
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #fff;
`;

// Lead form will remove later on

const LeadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFCA2E;
`;

const LeadInput = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 2px solid #ccc;
  background-color: #FFCA2E;
  font-size: 1.2rem;
  width: 20rem;
  margin-bottom: 1rem;
`;

const LeadButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #FFCA2E;
  color: #fff;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

const options = {
  travelStyles: [
    "Cultural",
    "Adventure",
    "Relaxation",
    "Beach",
    "City Break",
    "Road Trip",
    "Wildlife Safari",
  ],
  interestsNew: [
    { name: "History", icon: "fas fa-landmark" },
    { name: "Art", icon: "fas fa-paint-brush" },
    { name: "Food", icon: "fas fa-utensils" },
    { name: "Music", icon: "fas fa-music" },
    { name: "Nature", icon: "fas fa-tree" },
    { name: "Sports", icon: "fas fa-futbol" },
    { name: "Photography", icon: "fas fa-camera" },
    { name: "Architecture", icon: "fas fa-fort-awesome-alt" },
    { name: "Literature", icon: "fas fa-book" },
  ],

  interests: [
    "History",
    "Art",
    "Food",
    "Music",
    "Nature",
    "Sports",
    "Photography",
    "Architecture",
    "Literature",
  ],

  accommodationTypes: [
    "Hotel",
    "Boutique Hotel",
    "Hostel",
    "Resort",
    "Vacation Rental",
    "Camping",
    "Homestay",
    "Bed and Breakfast",
  ],
  activityTypes: ["Outdoor", "Sightseeing", "Shopping", "Nightlife", "Museums"],
  cuisineTypes: [
    { name: "Traditional", emoji: "" },
    { name: "Japanese", emoji: "" },
    { name: "Italian", emoji: "" },
    { name: "American", emoji: "" },
    { name: "Korean", emoji: "" },
    { name: "Mexican", emoji: "" },
    { name: "Thai", emoji: "" },
    { name: "Turkish", emoji: "" },
    { name: "Indian", emoji: "" },
    { name: "French", emoji: "" },
    { name: "Spanish", emoji: "" },
    { name: "Greek", emoji: "" },
    { name: "Chinese", emoji: "" },
  ],

  languages: [
    { value: "en", label: "English", icon: "🇺🇸" },
    { value: "sq", label: "Shqip", icon: "🇦🇱" },
    { value: "de", label: "Deutsch", icon: "🇩🇪" },
    { value: "fr", label: "Français", icon: "🇫🇷" },
    { value: "es", label: "Español", icon: "🇪🇸" },
    { value: "it", label: "Italiano", icon: "🇮🇹" },
    { value: "zh", label: "中文", icon: "🇨🇳" },
  ],
};

const topLocations = [
  { name: "Tirana, Albania", value: "Tirana/Albania" },
  { name: "Durrës, Albania", value: "Durrës/Albania" },
  { name: "Shkodër, Albania", value: "Shkodër/Albania" },
  // add more top locations as needed
];

const defaultValues = {
  destinationCountry: "",
  budget: "2500 USD",
  travelStyle: options.travelStyles[0],
  interestsNew: [],
  accommodationType: options.accommodationTypes[0],
  transportationType: "Bus",
  activityType: [options.activityTypes[0]],
  cuisineType: options.cuisineTypes[0],
  tripDuration: "3",
  language: options.languages[0].value,
};

const Main = ({ loading, response, handleSubmit, handleChange, email }) => (
  <MainContent>
    <LineBreak />
    <LineBreak />
    <Title></Title>
    {loading ? (
      <>
        <div>
          <Logo />
          <Image1 />
          <Image3 />
          <Image4 />
          <Image5 />
          <Image77 />
          <Image19 />
        </div>
        <Loading />
        <Subtitle>
          Your Details are processing to create a trip Itinerary
        </Subtitle>
      </>
    ) : !response ? (
      <>
        <div>
          <Logo />
          <Image1 />
          <Image3 />
          <Image4 />
          <Image5 />
          <Image77 />
          <Image19 />
        </div>
        <Subtitle>Fill the form to generate your itinerary</Subtitle>
        {/* Your form elements and submit button can be placed here */}
      </>
    ) : (
      <ResponseContainer>
        <ResponseData response={response} />
      </ResponseContainer>
    )}
  </MainContent>
);

const ResponseData = ({ response }) => {
  return (
    <ResponseContainer>
      <Logo />
      <Image1 />
      <Image3 />
      <Image4 />
      <Image5 />
      <Image6 />
      <Image7 />
      <Image8 />
      <Image10 />
      <Image11 />
      <Image18 />
      <ResponseTitle>
        <span role="img" aria-label="emoji"></span> Your travel plan is ready!
      </ResponseTitle>
      <ResponseText>
        <ReactMarkdown>{response}</ReactMarkdown>
      </ResponseText>
      <ButtonContainer>
        <ActionButton
          onClick={() => {
            const blob = new Blob([response], {
              type: "text/plain;charset=utf-8",
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", "travel-plan.txt");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            return false;
          }}
        >
          Download
        </ActionButton>
      </ButtonContainer>
    </ResponseContainer>
  );
};

const GenerateButton = ({ loading, onClick }) => (
  <Button onClick={onClick} disabled={loading}>
    {loading ? "Please wait..." : "Generate"}
  </Button>
);

const AITravelPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [values, setValues] = useState(defaultValues);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedCuisineTypes, setSelectedCuisineTypes] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    options.languages[0]
  );

  const handleCuisineTypeClick = cuisineType => {
    if (selectedCuisineTypes.includes(cuisineType)) {
      setSelectedCuisineTypes(
        selectedCuisineTypes.filter(item => item !== cuisineType)
      );
      setValues(prevState => ({
        ...prevState,
        cuisineType: selectedCuisineTypes.filter(item => item !== cuisineType),
      }));
    } else {
      if (selectedCuisineTypes.length >= 3) {
        setSelectedCuisineTypes(prevSelectedCuisineTypes => {
          const newSelectedCuisineTypes = [
            ...prevSelectedCuisineTypes.slice(1),
            cuisineType,
          ];
          setValues(prevState => ({
            ...prevState,
            cuisineType: newSelectedCuisineTypes,
          }));
          return newSelectedCuisineTypes;
        });
      } else {
        setSelectedCuisineTypes(prevSelectedCuisineTypes => {
          const newSelectedCuisineTypes = [
            ...prevSelectedCuisineTypes,
            cuisineType,
          ];
          setValues(prevState => ({
            ...prevState,
            cuisineType: newSelectedCuisineTypes,
          }));
          return newSelectedCuisineTypes;
        });
      }
    }
  };

  const handleInterestClick = interest => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      if (selectedInterests.length >= 3) {
        setSelectedInterests(prevSelectedInterests => {
          const newSelectedInterests = [
            ...prevSelectedInterests.slice(1),
            interest,
          ];
          setValues(prevState => ({
            ...prevState,
            interestsNew: newSelectedInterests,
          }));
          return newSelectedInterests;
        });
      } else {
        setSelectedInterests(prevSelectedInterests => {
          const newSelectedInterests = [...prevSelectedInterests, interest];
          setValues(prevState => ({
            ...prevState,
            interestsNew: newSelectedInterests,
          }));
          return newSelectedInterests;
        });
      }
    }
  };
  // TODO: Add a function to handle the language, cuisine type and interest selection
  /* const handleSelect = (option, field, maxSelect) => {
    let selectedValues = values[field] || [];

    if (selectedValues.includes(option)) {
      // Remove the option from the selected values
      selectedValues = selectedValues.filter((value) => value !== option);
    } else {
      // Add the option to the selected values
      if (selectedValues.length >= maxSelect) {
        // Remove the first selected value if the maximum number of options is reached
        selectedValues.shift();
      }
      selectedValues.push(option);
    }

    // Update the form state
    setValues((prevState) => ({
      ...prevState,
      [field]: selectedValues,
    }));
  }; */

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLocationClick = location => {
    setValues(prevState => ({
      ...prevState,
      destinationCountry: location.name,
    }));
  };

  const handleMultiSelectChange = e => {
    const { name, options } = e.target;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setValues(prevState => ({
      ...prevState,
      [name]: selectedOptions,
    }));
  };

  const handleLanguageClick = option => {
    setSelectedLanguage(option.value);

    setValues(prevState => ({
      ...prevState,
      language: option.label,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    let prompt = `Generate a personalized travel itinerary for a trip to ${values.destinationCountry} with a budget of ${values.budget}. The traveler is interested in a ${values.travelStyle} vacation and enjoys ${values.interestsNew}. They are looking for ${values.accommodationType} accommodations and prefer ${values.transportationType} transportation. The itinerary should include ${values.activityType} activities and ${values.cuisineType} dining options. Please provide a detailed itinerary with daily recommendations for ${values.tripDuration} days, including suggested destinations, activities, and dining options. The itinerary should be written in ${values.language}. `;

    fetch(`${process.env.REACT_APP_ENDPOINT_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    })
      .then(response => response.json())
      .then(data => {
        setResponse(data.choices[0].message.content);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };
  const [email, setEmail] = useState("");

  const handleLeadSubmit = event => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    fetch(
      "https://c4-na.altogic.com/e:6431cdd646d52b27d865c9da/lead",
      requestOptions
    )
      .then(response => response.json())
      .then(data => console.log(data));
    setEmail("");
  };

  const handleLeadChange = event => {
    setEmail(event.target.value);
  };

  return (
    <>
      <Container>
        <Main
          loading={loading}
          response={response}
          handleSubmit={handleLeadSubmit}
          handleChange={handleLeadChange}
          email={email}
        />
        <LineBreak />
        <Panel>
          <FormContainer onSubmit={handleSubmit}>
            <Label htmlFor="destinationCountry">Search for a Destination</Label>
            <Input
              type="text"
              placeholder="Enter the destination"
              id="destinationCountry"
              name="destinationCountry"
              value={values.destinationCountry}
              onChange={handleChange}
              required
            />
            <TopLocationContainer>
              <Label htmlFor="topDestinations">Top Places:</Label>
              {topLocations.map(location => (
                <PinButton
                  key={location.value}
                  onClick={() => handleLocationClick(location)}
                >
                  {location.name}
                </PinButton>
              ))}
            </TopLocationContainer>
            <FormRow>
              <FormGroup>
                <Label htmlFor="budget">
                  Budget
                  <p
                    style={{
                      display: "inline-block",
                      color: "#666",
                      fontSize: "10px",
                    }}
                  >
                    (with currency)
                  </p>
                </Label>
                <Input
                  type="text"
                  placeholder="e.g. $1000 USD, 1000 EUR, etc."
                  id="budget"
                  name="budget"
                  value={values.budget}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="tripDuration">
                  Trip Duration
                  <p
                    style={{
                      display: "inline-block",
                      color: "#666",
                      fontSize: "10px",
                    }}
                  >
                    (in days)
                  </p>
                </Label>
                <Input
                  type="number"
                  id="tripDuration"
                  name="tripDuration"
                  value={values.tripDuration}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
            <Label htmlFor="interests">Interests</Label>
            <InterestsContainerNew>
              {options.interestsNew.map((interest, index) => (
                <InterestItemNew
                  key={index}
                  className={
                    selectedInterests.includes(interest.name) ? "selected" : ""
                  }
                  onClick={() => {
                    handleInterestClick(interest.name);
                  }}
                  value={interest}
                >
                  <InterestEmoji aria-label="emoji">
                    {interest.emoji}
                  </InterestEmoji>
                  <InterestName>{interest.name}</InterestName>
                </InterestItemNew>
              ))}
            </InterestsContainerNew>

            <FormRow>
              <FormGroup>
                <Label htmlFor="accommodationType">Accommodation</Label>
                <Select
                  id="accommodationType"
                  name="accommodationType"
                  value={values.accommodationType}
                  onChange={handleChange}
                >
                  {options.accommodationTypes.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="travelStyle">Travel Style</Label>
                <Select
                  id="travelStyle"
                  name="travelStyle"
                  value={values.travelStyle}
                  onChange={handleChange}
                >
                  {options.travelStyles.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </FormRow>

            <Label htmlFor="transportationType">
              Transportation Type
              <p
                style={{
                  display: "inline-block",
                  fontSize: "10px",

                  color: "#666",
                }}
              >
                (e.g. car, train, bus, etc.)
              </p>
            </Label>
            <Input
              type="text"
              id="transportationType"
              name="transportationType"
              value={values.transportationType}
              onChange={handleChange}
              required
            />

            <Label htmlFor="activityType">
              Activity Type
              <p
                style={{
                  display: "inline-block",
                  fontSize: "10px",

                  color: "#666",
                }}
              >
                (select multiple options)
              </p>
            </Label>
            <Select
              id="activityType"
              name="activityType"
              multiple
              value={values.activityType}
              onChange={handleMultiSelectChange}
            >
              {options.activityTypes.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <Label htmlFor="cuisineType">Cuisine Type</Label>
            <CuisineTypesContainer>
              {options.cuisineTypes.map(cuisineType => (
                <CuisineType
                  multiple
                  value={values.cuisineType}
                  onChange={handleMultiSelectChange}
                  key={cuisineType.name}
                  className={
                    selectedCuisineTypes.includes(cuisineType.name)
                      ? "selected"
                      : ""
                  }
                  onClick={() => {
                    handleCuisineTypeClick(cuisineType.name);
                  }}
                >
                  <span role="img" aria-label={cuisineType.name}>
                    {cuisineType.emoji}
                  </span>

                  <br />

                  <span>{cuisineType.name}</span>
                </CuisineType>
              ))}
            </CuisineTypesContainer>

            <LanguageSelectorContainer>
              <Label>Language</Label>
              <LanguageRow>
                {options.languages.map(option => (
                  <LanguageOption
                    key={option.value}
                    onClick={() => {
                      handleLanguageClick(option);
                    }}
                    value={values.language}
                    className={
                      selectedLanguage === option.value ? "selected" : ""
                    }
                  >
                    <span role="img" aria-label={option.label}>
                      {option.icon}
                    </span>
                  </LanguageOption>
                ))}
              </LanguageRow>
            </LanguageSelectorContainer>
            <GenerateButton
              loading={loading}
              type="submit"
              disabled={loading}
              className={loading ? "loading" : ""}
            ></GenerateButton>
          </FormContainer>
        </Panel>
      </Container>
    </>
  );
};

export default AITravelPlanner;
