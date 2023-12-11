import React from 'react';
import './SkinType.css';
import { Parallax } from 'react-parallax';
import Vskinuno from './Assets/skin7.jpg';
import Vskindos from './Assets/skin5.jpg';
import Vskintres from './Assets/skin3.jpg';
import Vskincuatro from './Assets/skin8.jpg';
import Vskincinco from './Assets/skin6.jpg';
import Vskinseis from './Assets/skin2.jpg';
import Vskinfinal from './Assets/skinf9.jpg';
import Vskinalt from './Assets/skinalt.jpg';


function SkinType() {

return (
<div className='SkinT'>
    <Parallax bgImage={Vskinuno} strength={500}>
        <div className='pic'>
            <div className='skint-content'>What's my type of skin?</div>
        </div>
        <div className='texti-box'>
            <h3>Did you know that?</h3>
            <p style={{ marginBottom: '10px' }}>The skin, as the body's largest organ, plays a crucial role in regulating temperature and safeguarding against germs. 
                The outermost layer, known as the skin barrier, primarily composed of lipids like ceramides, acts as a vital gatekeeper, 
                preserving moisture and blocking harmful elements. While a healthy skin barrier is universally important, 
                individual skin types vary. Achieving radiant, healthy skin requires recognizing unique characteristics rather than adopting 
                a one-size-fits-all approach.</p> <p>Consider these following signs when determining whether your skin tends to be oily, dry, average, a combination of types, or sensitive.
            </p>
        </div>
    </Parallax>

    <Parallax bgImage={Vskindos} strength={300}>
        <div className='pic'>
            <div className='skint-content'>Oily Skin</div>
        </div>
        <div className='texti-box'>
            <h3>Excess of Sebum</h3>
            <p style={{ marginBottom: '10px' }}>People with oily skin produce more natural oils, which can make their skin appear shiny and feel greasy, especially in the 
                T-zone (forehead, nose, and chin). Although oily skin may have fewer wrinkles, it can be more prone to enlarged pores, acne blemishes, blackheads, and whiteheads, according to the 
                American Academy of Dermatology (AAD). 
                It's important to note that, despite producing more natural oils, oily skin still requires proper moisture.
            </p>
            <p>
            Taking care of oily skin involves choosing products that nourish and hydrate without clogging pores or causing breakouts. An effective routine for oily skin includes a gentle, foaming cleanser to remove dirt and excess oil and a lightweight, oil-free, 
            and non-comedogenic moisturizer to provide essential hydration, We suggest these {' '}
        <a href="https://www.cerave.com/skincare/oily-skin" target="_blank" rel="noopener noreferrer">
        products
        </a>
        !
            </p>
        </div>
    </Parallax>

    <Parallax bgImage={Vskintres} strength={300}>
        <div className='pic'>
            <div className='skint-content'>Dry Skin</div>
        </div>
        <div className='texti-box'>
            <h3>Less natural oils</h3>
            <p style={{ marginBottom: '10px' }}>Dry skin tends to have less natural oils compared to other skin types. 
                This can make it look dull and feel rough, flaky, or scaly. 
                Dry skin may also feel tight, less elastic, and show visible fine lines. It can even become itchy or irritated.
            </p>
            <p> 
                If you have dry skin, a good skincare routine should include gentle and hydrating ingredients that help keep 
                your skin's protective moisture barrier intact, like ceramides. To take care of dry skin, 
                the Mayo Clinic suggests avoiding long, hot showers, moisturizing several times a day, and choosing skincare 
                products that are fragrance-free, non-comedogenic, and alcohol-free such as{' '}
        <a href="https://www.cerave.com/skincare/dry-skin" target="_blank" rel="noopener noreferrer">
        our suggested
        </a>
        .
            </p>

        </div>
    </Parallax>

    <Parallax bgImage={Vskincuatro} strength={300}>
        <div className='pic'>
            <div className='skint-content'>Normal skin</div>
        </div>
        <div className='texti-box'>
            <h3>balanced—feeling</h3>
            <p style={{ marginBottom: '10px' }}>Normal skin is not too dry or too oily. It doesn't usually experience breakouts, flakiness, or 
                that greasy or tight feeling. People with normal skin usually have small pores, smooth skin, and are less likely to 
                be sensitive or have blemishes. Even though normal skin doesn't have specific problems, it still needs proper 
                care to look 
                and feel great. 
            </p>
            <p>A good routine with these {' '} <a href="https://www.cerave.com/skincare/normal-skin" target="_blank" rel="noopener noreferrer">products</a> may help keep the normal skin hydrated by holding in moisture and supporting its protective barrier.
            </p>
        </div>
    </Parallax>
    <Parallax bgImage={Vskincinco} strength={300}>
        <div className='pic'>
            <div className='skint-content'>Combination Skin</div>
        </div>
        <div className='texti-box'>
            <h3>dry and oily</h3>
            <p style={{ marginBottom: '10px' }}>Combination skin has both dry and oily areas, often with the T-zone (forehead, nose, and chin) being 
                oily and the cheeks being either dry or normal. This type of skin can change with the seasons or due to 
                factors like stress or hormonal changes. Taking care of combination skin involves effective cleansing 
                and hydration.   
            </p>
            <p>A good routine with these {' '} <a href="https://www.cerave.com/skincare/combination-skin" target="_blank" rel="noopener noreferrer">products</a> may help you with ease.
            </p>
        </div>
    </Parallax>

    <Parallax bgImage={Vskinseis} strength={300}>
        <div className='pic'>
            <div className='skint-content'>Sensitive Skin</div>
        </div>
        <div className='texti-box'>
            <h3>vulnerable cutis</h3>
            <p style={{ marginBottom: '10px' }}>Sensitive skin is often thought of as its own type, but you can actually have oily, dry, or normal skin that's also
                 sensitive. No matter your skin type, if it's sensitive, you might notice it looking red or feeling like 
                 it's burning, itching, or dry. These reactions could be due to your skin being more prone to irritants from 
                 things like certain ingredients in products, such as dyes or fragrance, as well as environmental factors.
            </p>
            <p>
                If you have sensitive skin, you can try to figure out what triggers it and then avoid using cleansers, moisturizers,
                or other products with those specific ingredients. You can also make changes to your surroundings to limit your 
                exposure to things that might set off your sensitive skin and use <a href="https://www.cerave.com/skincare/sensitive-skin" 
                target="_blank" rel="noopener noreferrer">these</a> instead. 
            </p>
        </div>
    </Parallax>

    <Parallax bgImage={Vskinfinal} strength={100} blur={1}>
        <div className='pic'>
            <div className='skint-content'>How to Identify My Skin Type?</div>
        </div>
        <div className='texti-box'>
            <h3>The watch & wait method</h3>
            <p style={{ marginBottom: '10px' }}>This at-home test allows you to understand your skin type by observing how your skin behaves after cleansing.</p>
            <ul className='list-skin'>
                <li>To start, wash your face with a gentle cleanser, then gently pat it dry.</li>
                <li>Wait 30 minutes.</li>
                <li>If your skin appears shiny throughout, you likely have oily skin.</li>
                <li>If it feels tight and is flaky or scaly, you likely have dry skin.</li>
                <li>If the shine is only in your T-zone, you probably have combination skin.</li>
                <li>If your skin feels hydrated and comfortable, but not oily, you likely have normal skin.</li>
            </ul>
        </div>
    </Parallax>

    <Parallax bgImage={Vskinalt} strength={100}>
        <div className='pic'>
            <div className='skint-content'>You can also try...</div>
        </div>
        <div className='texti-box'>
            <h3>The blotting sheet method</h3>
            <p style={{ marginBottom: '10px' }}>When pressed to the skin, blotting sheets absorb oil—and you can use them to help you understand what 
                type of skin you have.
            </p>
            <ul className='list-skin'>
                <li>After washing your face with a gentle cleanser, pat it dry and wait for 30 minutes.</li>
                <li>Press blotting sheets to various areas of your face, then hold the sheets up to the light to see the oil markings.</li>
                <li>If the sheets soaked up an abundance of oil from all areas of the face, you have oily skin.</li>
                <li>If they absorb little to no oil, then you probably have dry skin.</li>
                <li>If the sheets show only a small amount of oil from your T-zone, you have combination skin.</li>
                <li>If you only see minimal oil from every area of your face, you most likely have normal skin.</li>
            </ul>
            <p style={{ marginBottom: '10px' }}>
            It's good to keep in mind that all skin types can be sensitive or get acne, even if someone has normal skin, 
            they might be less likely to have these issues. But using the right products can help you take care of your skin 
            and deal with sensitivity and acne. 
            </p>
            <p>
            If you're unsure, it's a good idea to see a certified dermatologist for a 
            personalized evaluation and advice on the best skincare routine for your skin. 💆🏻‍♀️💆🏻‍♂️✨
            </p>
        </div>
    </Parallax>

</div>

);

}

export default SkinType;
