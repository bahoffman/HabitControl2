import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const FAQPage = () => (
  <Layout>
    <SEO title="FAQs" description="Frequently Asked Questions Page" />
    <Tabs>
      <TabList>
        <Tab>USING HABITROL</Tab>
        <Tab>HOW TO USE THE PATCH </Tab>
        <Tab>Quitting</Tab>
        <Tab>PAYMENT & SHIPPING</Tab>
      </TabList>
      <TabPanel>
        <h4>Which product is right for me?</h4>
        <p>
          If you smoke more than 10 cigarettes per day, begin with Step 1: Use
          the 21 mg patch once a day for 4 weeks; the Step 2: 14 mg patch once a
          day for 2 weeks; then the Step 3: 7 mg patch once a day for 2 weeks.
        </p>
        <p>
          If you smoke 10 or fewer cigarettes per day, begin with Step 2: Use
          the 14 mg patch once a day for 6 weeks; then the Step 3: 7 mg patch
          once a day for 2 weeks.{" "}
        </p>
        <p>Habitrol is for people ages 18 and older.</p>

        <h3>Can I use Habitrol if I’m pregnant or nursing?</h3>
        <p>
          If you are pregnant or breast-feeding, only use this medicine on the
          advice of your health care provider. Smoking can seriously harm your
          child. Try to stop smoking without using any nicotine replacement
          medicine. This medicine is believed to be safer than smoking. However,
          the risks to your child from this medicine are not fully known.
        </p>
        <h3>Are there any side effects of using Habitrol?</h3>
        <p>
          You may experience nausea, dizziness, dry mouth, diarrhea, nervousness
          or restlessness, headache, vivid dreams or other sleep disturbances,
          and irritability. If you experience any of the following side effects,
          immediately remove the patch and call your doctor:
          <ul>
            <li>Severe skin irritation or discoloration </li>
            <li>Irregular heartbeats or palpitations</li>
            <li> Severe chest pain or tightening </li>{" "}
            <li>
              Symptoms of nicotine overdose, such as pallor (extreme paleness),
              cold sweat, nausea, abnormal salivation, vomiting, abdominal pain
              or severe headache, disturbed hearing or vision, dizziness, mental
              confusion or weakness.
            </li>
          </ul>
        </p>
        <h3>My skin is reacting to the patch. Should I remove it?</h3>
        <p>
          When you first put on a patch, mild itching, burning, or tingling at
          the patch application site is normal and should go away within an
          hour. After you remove a patch, the skin under the patch might be
          somewhat red. Your skin should not stay red for more than a day. If
          you have a skin rash or redness caused by the patch that does not go
          away after 4 days, or your skin swells, call your doctor. Do not put
          on a new patch; you may be allergic to one of the components of the
          patch.
        </p>
      </TabPanel>
      <TabPanel>
        <h3>How do I apply the patch?</h3>
        <ul>
          <li>
            Choose a clean, dry, non-hairy area of skin on your upper body or
            the outer part of your arm. Do not put a patch on skin that is very
            oily, burned, broken out, cut or irritated in any way. Immediately
            before applying the patch, wash your hands and the skin area with
            plain soap and water and dry completely. Avoid using any soap,
            lotion, hand cream, tanning lotion or oil, bath oil or insect
            repellent that contains aloe, lanolin or glycerin as a moisturizer.
            These products can leave a moisturizing film on your skin, which can
            interfere with the adherence of the patch.{" "}
          </li>
          <li>
            Do not remove the patch from its sealed, protective pouch until you
            are ready to use it. Carefully cut open the child-resistant pouch
            along the dotted line, as indicated. If the new patch is cut, throw
            it away. Save pouch to use for patch disposal. Dispose of the used
            patches by folding sticky ends together and putting in pouch.
          </li>
          <li>
            {" "}
            A shiny protective liner covers the sticky side of the patch where
            it contacts the skin. The liner has a precut slit to help you remove
            it from the patch. With the silver side facing you, pull the liner
            away from the patch, starting at the precut slit. Hold the patch at
            the edge (touch the sticky side as little as possible) and pull off
            the other piece of the protective liner. Throw this liner away.{" "}
          </li>
          <li>
            Immediately apply the sticky side of the patch to your skin. Press
            the patch firmly against your skin with the palm of your hand for
            about 10 seconds. Make sure it sticks well to your skin, especially
            around the edges.
          </li>{" "}
          <li>
            When you have finished applying or removing the patch, wash your
            hands with water only. Nicotine on your hands could get into your
            eyes and nose and could cause stinging, redness or irritation.{" "}
          </li>
          <li>After 24 hours, remove the patch you have been wearing. </li>
        </ul>
        <p>
          If you remove and apply the patch at about the same time each day, it
          will help you to remember when to put on a new patch.
        </p>
        <p>
          {" "}
          Choose a different place on your skin to apply the next patch and
          repeat steps 1 through 5. Do not reapply a patch to a previously used
          skin site for at least 1 week. Do not leave the patch on for more than
          24 hours, because it may irritate your skin and loses strength after
          24 hours. Do not wear more than one patch at the same time, and do not
          cut a patch in half or into smaller pieces to wear.
        </p>
        <h3>
          What's the best way to store the patches? How should I dispose of
          them?
        </h3>
        <p>
          The patch should be kept in its protective pouch until use. Pouches
          should be stored at room temperature (between 68-77°F or 20-25°C),
          because the patch is sensitive to heat.{" "}
        </p>
        <p>
          Save pouch to use for patch disposal. Dispose of the used and unused
          patches by folding sticky ends together and putting in pouch. Keep all
          used and unused patches out of the reach of children and pets
        </p>
        <h3>
          Is it possible to customize the effectiveness of Habitrol by wearing
          more than one patch or cutting one in half?
        </h3>
        <p>
          No. Each patch is designed to allow you to gradually reduce your
          nicotine levels and should be used as directed. Do not wear more than
          one patch at a time. Do not cut the patch in half or into smaller
          pieces. Do not leave the patch on for more than 24 hours, as it may
          irritate your skin and loses its strength after 24 hours.
        </p>
        <h3>My patch got wet. Should I remove it?</h3>
        <p>
          No. Water will not harm or affect the patch you are wearing. You can
          take a bath or a shower, or you can swim while you are wearing the
          patch.
        </p>
        <h3>What if my patch comes off?</h3>
        <p>
          If your patch falls off, apply a new one and remove it at the same
          time you would have taken off the original patch to maintain your
          schedule. When applying the patch, be sure to press it firmly onto
          your skin with the palm of your hand for about 10 seconds, making sure
          that the patch sticks well, especially around the edges. When you’re
          finished applying or removing the patch, wash your hands with water
          only.
        </p>
      </TabPanel>
      <TabPanel>
        <h3>I’m ready to quit smoking. Now what?</h3>
        <p>
          First and foremost, congratulations! Now that you’ve made the
          important decision to stop smoking, you may want to list the reasons
          that led you to take this step and keep them handy. This will help
          keep you on track and moving toward your goal. Next, you’ll want to
          set a quit date—this day will be the first day that you stop smoking
          cigarettes and begin using the Habitrol patch.
        </p>
        <h3>How should I prepare for my quit day?</h3>
        <p>
          Let your friends and family know about your plans so that you can rely
          on their support during the process. Freshen up your home, your
          closet, your car, and any other places where you spend a lot of time.
          The night before your quit day, throw away any remaining cigarettes,
          lighters, or ashtrays.
        </p>
        <h3>How does Habitrol help me quit smoking?</h3>
        <p>
          The patch contains nicotine, and releases it into the bloodstream. The
          patch helps reduce the nicotine withdrawal symptoms many people
          normally feel when they stop smoking. This patch program takes 8 weeks
          to complete. It is important to complete treatment. If you feel you
          need to use the patch for a longer period to keep from smoking, talk
          to your health care provider.{" "}
        </p>
        <p>
          Lowering your patch dosage over eight weeks will help you overcome
          physical cravings for nicotine. By helping to reduce your physical
          nicotine withdrawal symptoms the patch helps you to concentrate on the
          psychological aspects of quitting and to change your habits that
          “trigger” your nicotine cravings.
        </p>
        <h3>Isn’t it better to quit smoking and nicotine altogether?</h3>
        <p>
          While the patch contains nicotine, you are not inhaling the tars,
          toxins, and chemicals in cigarette smoke. The patch will gradually
          reduce your nicotine level, which can reduce nicotine withdrawal
          symptoms and, along with behavior support program, improves your
          chances of quitting altogether.
        </p>
        <h3>Is it true that quitting smoking can lead to weight gain?</h3>
        <p>
          Sometimes weight change is simply a result of a change in your body’s
          metabolism. This is caused by your body’s withdrawal from nicotine.
          Your metabolism is simply returning to that of a nonsmoker. Besides,
          the average weight gain is only about five to ten pounds, and as you
          will see, there are things you can do to help control it. Another
          source of extra pounds is the need for oral gratification. As with
          typical weight gain, increased physical activity and a healthy diet
          will go a long way to reducing any added pounds.
        </p>
      </TabPanel>
      <TabPanel>
        <h3>WHO SHOULD I CONTACT IF I HAVE ANY QUESTIONS? </h3>
        <p>
          You can contact us at info@cureaquagel.com or call us at
          (424-355-5041){" "}
        </p>
        <h3>DO YOU SHIP INTERNATIONALLY? </h3>
        <p>Yes, but only to Mexico and Canada. </p>
        <h3>HOW CAN I RETURN PRODUCT? </h3>
        <p>
          You may return new, unopened items within 30 days of delivery for a
          full refund.
        </p>
      </TabPanel>
    </Tabs>
  </Layout>
)

export default FAQPage
