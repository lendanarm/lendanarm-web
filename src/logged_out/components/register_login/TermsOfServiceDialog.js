import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = (theme) => ({
  termsConditionsListitem: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
  },
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  backIcon: {
    marginRight: theme.spacing(1),
  },
});

function TermsOfServiceDialog(props) {
  const { classes, onClose, theme } = props;
  return (
    <Dialog open scroll="paper" onClose={onClose} hideBackdrop>
      <DialogTitle>Terms and Conditions</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          Introduction
        </Typography>
        <Typography paragraph>
          This Terms of Use Agreement (these “Terms of Use”) is a binding legal
          contract between you (“You” or “Your” either an individual or a legal
          entity) and Project Lend an Arm. These Terms of Use govern Your access
          to and use of our progressive website, media, apps, in-app services
          and any other cloud services offered by Project Lend an Arm including
          without limitation{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#8A0303" }}>
            www.lendanarm.ng
          </Link>{" "}
          website and any media, software, programs, services, tools, features,
          databases, materials, content, features, products, apps, in-app
          services, or information available or sold on or through it or used in
          connection with it (collectively, the “Services” and each a
          “Service”). By downloading, accessing or using any part of the Service
          You have accessed, You will be bound by these Terms of Use. If You do
          not agree to these Terms of Use, Project Lend an Arm is not willing to
          grant You any right to use or access the Service. In such event, You
          are not granted permission to access or otherwise use the Service and
          are instructed to exit the Service immediately. Project Lend an Arm
          may change, add or remove portions of the Terms of Use from time to
          time, and such changes shall become effective immediately upon
          posting. It is Your responsibility to review the Terms of Use prior to
          each use of the Service, and by continuing to use the Service, You
          agree to any changes, additions and removals.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          SERVICE ACCESS AND USE LICENSE
        </Typography>
        <Typography paragraph>
          The Service You have accessed and all of its contents as a whole and
          in part are protected by copyright, trademark, service mark, trade
          name and other intellectual property, and are owned or controlled by
          Project Lend an Arm, its affiliates and licensors. The Service is
          licensed to You, not sold. Except for the limited license granted in
          these Terms of Use, Project Lend an Arm and its licensors retain all
          right, title and interest in the Service and all proprietary rights in
          the Service, including without limitation copyrights, patents,
          trademarks, service marks and trade names. Project Lend an Arm may
          change, suspend, or discontinue any aspect of the Service at any time.
          Project Lend an Arm, its suppliers and service providers reserve all
          rights not granted in these Terms of Use.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          1. GRANT OF LICENSE
        </Typography>
        <Typography paragraph>
          Project Lend an Arm grants You a personal, revocable, nontransferable,
          nonexclusive license to use the Service for personal, non-commercial
          purposes, conditioned on Your continued compliance with these Terms of
          Use.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          2. LIMITATIONS ON LICENSE
        </Typography>
        <Typography paragraph>
          The license granted to You in these Terms of Use is restricted as
          follows:
          <ul>
            <li>
              Limitations on Copying and Distribution. You may download or copy
              downloadable items displayed on the Service for personal,
              non-commercial use only, provided that You maintain and display
              all copyright, trademark and other notices contained therein.
            </li>
            <li>
              Limitations on Use. You may use and access the Service solely for
              Your personal, non-commercial use. All use of the Service must be
              in accordance with these Terms of Use. You may not use, copy,
              store, reproduce, transmit, distribute, display, modify, alter,
              license, sublicense, or commercially exploit the Service or any
              contents, information, data or materials provided through the
              Service in any manner not expressly permitted by these Terms of
              Use or the Service. You may not assign, sublicense, rent,
              timeshare, loan, lease or otherwise transfer the Service, or
              directly or indirectly permit any third party to use or copy any
              of the Services. You may not:
            </li>
            <ol type="i">
              <li>
                use any “deep link”, “page scrape”, “robot”, “spider”, or other
                automatic device, program, script, algorithm or methodology, or
                any similar or equivalent manual process, to access, acquire,
                copy, or monitor any portion of the Service or in any way
                reproduce or circumvent the navigational structure or
                presentation of the Service to obtain or attempt to obtain any
                materials, documents, or information through any means not
                purposefully made available through the Service;
              </li>
              <li>
                attempt to gain unauthorized access to any portion or feature of
                the Service, including without limitation, the account of any
                other authorized user or any other systems or networks connected
                to the Service or to any server used by Project Lend an Arm or
                to any of the services offered on or through the Service, by
                hacking, password “mining” or any other illegitimate or
                prohibited means;
              </li>
              <li>
                probe, scan, or test the vulnerability of the Service or any
                network connected to the Service, or breach the security or
                authentication measures on the Service, or any network connected
                to the Service;
              </li>
              <li>
                reverse look-up, trace, or seek to trace any information on any
                other authorized user of or visitor to the Service;
              </li>
              <li>
                take any action that imposes an unreasonable or
                disproportionately large load on the infrastructure of the
                Service or systems or networks of Project Lend an Arm or
                networks connected to the Service;
              </li>
              <li>
                use any device, software, or routine to interfere with the
                proper working of the Service or any transaction being conducted
                on the Service, or with any other person’s use of the Service;
              </li>
              <li>
                use the Service to harvest or collect e-mail addresses or other
                contact information;
              </li>
              <li>
                market, co-brand, private label, separately distribute, resell
                or otherwise permit third parties to access and use the Service
                without the express, separate and prior written permission of
                Project Lend an Arm;
              </li>
              <li>
                create an intact reproduction of a page or pages of the Service
                into another service; or
              </li>
              <li>
                use the Service in an unlawful manner or in a manner that could
                damage, disparage, or otherwise negatively impact Project Lend
                an Arm. • Non-Solicitation. You may not post or transmit through
                the Service any material which contains advertising or any
                solicitation with respect to products or services.
              </li>
            </ol>
            <li>
              Limitations on Reverse Engineering and Modification. You may not
              reverse engineer, decompile, disassemble, modify or create works
              derivative of the Service or any materials accessed through the
              Service.
            </li>
            <li>
              Proprietary Notices. You may not remove any proprietary notices,
              including copyright and trademark notices, or labels from the
              Service on any materials accessed through the Service.
            </li>
            <li>
              Compliance with Applicable Law. You are solely responsible for
              ensuring Your use of the Service is in compliance with all
              applicable foreign, federal, state and local laws, rules and
              regulations.
            </li>
          </ul>
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          3. USER OBLIGATIONS
        </Typography>
        <Typography paragraph>
          By downloading, accessing, or using the Service in order to view
          information and materials or submit Material (as defined below) of any
          kind, You represent that You:
        </Typography>
        <Typography paragraphy>
          <ol type="i">
            <li>
              are at least eighteen (18) years of age, or between thirteen (13)
              and seventeen (17) years of age and using the Service with
              parental or legal guardian consent and supervision;
            </li>
            <li>
              are registered to the extent required, and have not been
              previously restricted, suspended or terminated by Project Lend an
              Arm; and
            </li>
            <li>
              are not using another authorized user’s account without that
              person’s permission.
            </li>
          </ol>
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          4. YOUR SUBMISSION OF CONTENT
        </Typography>
        <Typography paragraph>
          The Service may contain comment areas, questionnaires, tools, and
          other interactive features where You can share and display content,
          information, postings, materials, including without limitation,
          statements, photographs, video and other images (collectively
          “Materials”). You are solely responsible for any Materials You
          provide. By submitting Materials to the Service, You warrant that You
          have all necessary rights to grant, and automatically grant to Project
          Lend an Arm and its affiliates, a royalty-free, worldwide, perpetual,
          irrevocable, non-exclusive and fully sublicensable right (including
          any moral rights) and license to use, license, reproduce, modify,
          adapt, publish, publicly display, publicly perform, translate, and
          distribute such Materials (in whole or in part) and/or to incorporate
          them in other works in any form, media or technology now known or
          developed in the future. You also permit any other users of the
          Service to access, view, store or reproduce Your Materials and content
          for that user’s personal, non-commercial use. Project Lend an Arm will
          not be required to treat any Materials as confidential, and You grant
          to Project Lend an Arm the right to edit, copy, display, publish and
          distribute any Materials made available via the Service by You,
          without compensation to You or any other party submitting the
          Materials for You. Notwithstanding the right and license, by merely
          permitting Your Materials to appear on the Service, Project Lend an
          Arm is not a publisher of such Materials, and is merely functioning as
          an intermediary to enable You to provide and display Materials.
          Moreover, and except as provided in these Terms of Use with respect to
          the right and ability of Project Lend an Arm to delete or remove
          Materials, Project Lend an Arm does not endorse, oppose, or edit any
          opinion provided by You or any other user and does not make any
          representation with respect to, nor does it endorse the accuracy,
          completeness, timeliness, or reliability of any Materials displayed,
          uploaded, linked-to or distributed by You or any other user. You agree
          that by using the Service, You will not post or transmit any of the
          following:
          <ul>
            <li>
              Anything that interferes with or disrupts the Service or its
              operation;
            </li>
            <li>
              Materials that are vulgar, obscene, indecent, profane, or
              otherwise objectionable or offensive, defamatory, libelous,
              unlawful, threatening, abusive, harassing, misleading, or false;
            </li>
            <li>
              Unauthorized copyrighted materials, or any other material that
              infringes on the intellectual property rights, rights of publicity
              or personality, trade secrets, confidentiality, or privacy of
              others;
            </li>
            <li>
              Materials that encourage criminal conduct or that would give rise
              to civil liability or otherwise violate any law or regulation in
              any jurisdiction;
            </li>
            <li>Materials that harm minors;</li>
            <li>
              Materials that impersonate any other person or entity, whether
              actual or fictitious, or that misrepresent Your affiliation with
              any entity; or
            </li>
            <li>
              Files that contain malicious code, viruses, corrupted files, or
              any other similar software or programs that may damage the
              operation of another’s computer, network, or the Service.
            </li>
          </ul>
        </Typography>

        <Typography variant="h6" color="primary" paragraph>
          5. OTHER TERMS AND CONDITIONS.
        </Typography>
        <Typography paragraph>
          Additional notices or terms and conditions may apply to receipt of
          services, participation in a particular program, sweepstakes,
          training, authorized user registration to other specific portions or
          features of the Service, all of which are made a part of these Terms
          of Use by this reference. If there is a conflict between these Terms
          of Use and the terms posted for or applicable to a specific portion of
          the Service, the latter terms shall control with respect to Your use
          of that portion of the Service.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          6. LINKS TO OTHER SERVICES.
        </Typography>
        <Typography paragraph>
          Project Lend an Arm may provide links, in its sole discretion, to
          other services. Project Lend an Arm is not responsible for the
          availability of these outside resources or their contents. Project
          Lend an Arm expressly disclaims any responsibility for the content,
          materials, accuracy of information and/or the quality of the products
          or services provided by, available through, or advertised on these
          third-party services, or the products or services provided by any
          third party.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          7. LINKS TO THIS SERVICE
        </Typography>
        <Typography paragraph>
          You may link to the Service provided that You do so in a way that
          indicates that the link is direct to an Project Lend an Arm service
          and is fair and not misleading. You may not integrate or make use of
          all or part of the Service in ways that would confuse or mislead
          visitors as to the nature and origin of the Service’s content.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          8. PASSWORDS; SECURITY
        </Typography>
        <Typography paragraph>
          Registration by You as an authorized user for access to certain areas
          of the Service may require both a user name and a password
          (“Authorized User Credentials”). You may also have to provide certain
          registration information, all of which must be accurate and updated.
          You are not allowed to share or give Your Authorized User Credentials
          to anyone else. You are responsible for maintaining the
          confidentiality of Your password. You agree not to use another
          person’s Authorized User Credentials or select Authorized User
          Credentials:
          <ol type="i">
            <li>with the intent to impersonate another person;</li>
            <li>
              subject to the rights of another person without authorization;
            </li>
            <li>
              in violation of the intellectual property rights of another
              person; or
            </li>
            <li>
              that Project Lend an Arm, in its sole discretion, deems
              inappropriate or offensive or discriminates on the basis of race,
              color, sex, language, religion, political or other opinion,
              national or social origin, property, birth or other status. You
              acknowledge and agree that You shall have no ownership or other
              property interest in Your account and/or user name, and You
              further acknowledge and agree that all rights in and to Your user
              name and account are and shall forever be owned by and inure to
              the benefit of Project Lend an Arm
            </li>
          </ol>
          Failure to comply with the foregoing shall constitute a breach of
          these Terms of Use, which may result in immediate suspension or
          termination of Your Authorized User Credentials. PROJECT LEND AN ARM
          WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE ARISING FROM YOUR FAILURE TO
          COMPLY WITH THESE OBLIGATIONS. Project Lend an Arm reserves the right
          to delete or change Authorized User Credentials (with or without
          notice) at any time and for any reason.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          9. TERMINATION
        </Typography>
        <Typography paragraph>
          These Terms of Use and Your license to use the Service will take
          effect the moment You install, access, or use the Service and will be
          in effect until terminated as set forth below. This license will
          automatically terminate in the event You breach any of these terms.
          Termination will be effective without notice. You may terminate these
          Terms of Use at any time by ceasing to use the Service. All applicable
          provisions of these Terms of Use as identified below will survive
          termination. Upon termination, You must destroy all copies of any
          aspect of the Service in Your possession. The following will survive
          termination of these Terms of Use for any reason:
          <ol type="i">
            <li>the General section below;</li>
            <li>
              the provisions concerning rights in Your Materials that You have
              granted to Project Lend an Arm; and
            </li>
            <li>
              Project Lend an Arm proprietary rights, indemnity, disclaimers of
              warranty, limitation of liability, and governing law.
            </li>
          </ol>
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          10. WARRANTY DISCLAIMER
        </Typography>
        <Typography paragraph>
          You expressly agree that use of the service is at your sole risk and
          you assume all risk. The service and its information, content,
          materials, products, services, and user content is provided on an “as
          available,” “as is” basis. To the maximum extent permitted by law,
          project lend an arm and its licensors disclaim all warranties with
          respect to the service, including, but not limited to, the implied
          warranties of non-infringement, title, merchantability, quiet
          enjoyment, quality of information, fitness for a particular purpose,
          and results that may be obtained from use of the service. Project lend
          an arm does not endorse, recommend, or make any warranties as to the
          content, information, materials, user materials, features, services,
          products, opinions, or statements available on or through the service
          or through links on the service. Project Lend An Arm does not warrant
          that the service will meet your requirements, or that the operation of
          the service will be uninterrupted or error-free, or that defects in
          the service will be corrected. You specifically acknowledge that
          project lend an arm is not liable for the defamatory, offensive or
          illegal conduct of other users or third-parties and that the risk of
          injury from the foregoing rests entirely with you.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          11. OTHER DISCLAIMERS
        </Typography>
        <Typography paragraph>
          Content on the service is not intended to substitute for professional
          advice of any kind. In particular, nothing contained on the service is
          or should be considered, or used as a substitute for, medical advice,
          diagnosis or treatment. Always seek the advice of your physician or
          other qualified health provider with any questions you may have
          regarding personal health or medical conditions. Never disregard or
          avoid professional medical advice or delay in seeking it because of
          something you have read, heard or seen on the service. Project lend an
          arm does not represent or warrant that product information on the
          service is accurate or complete, as information may be provided by
          product manufacturers or suppliers, and on occasion manufacturers may
          modify their products and update their labels. We recommend that you
          do not rely solely on the information presented on the service and
          that you consult the product’s label or contact the manufacturer
          directly if you have a specific concern or question about a product.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          12. LIMITATION OF LIABILITY
        </Typography>
        <Typography paragraph>
          To the maximum extent permitted by law, in no event will project lend
          an arm or its suppliers/licensors be liable to you or any third party
          for any direct, special, incidental, consequential, punitive, or
          indirect damages (whether in contract, tort (including negligence), or
          otherwise), which include, without limitation, damages for personal
          injury, lost profits, lost data and business interruption, arising out
          of the use of, or inability to use, the service, its content or
          products, or any of its third party content or products available or
          sold on or through the service, even if project lend an arm has been
          advised of the possibility of such damages. In any case, the entire
          liability of project lend an arm and its suppliers/licensors under
          these terms of use for all damages, losses, and causes of action
          (whether in contract, tort (including negligence), or otherwise) is
          limited to the amount paid by you, if any, for access to the service.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          13. INTERNATIONAL USERS
        </Typography>
        <Typography paragraph>
          While all Services are controlled and operated within the Nigeria,
          this publication may be distributed internationally and may contain
          references to Project Lend an Arm services, products, and programs
          that are not in Your country. These references do not imply that
          Project Lend an Arm intend to announce or provide the programs,
          products, or services in Your country. Project Lend an Arm makes no
          representation that content, materials or products available on or
          through the Service are appropriate or available for use outside of
          Nigeria. If You access or use the Service from a location outside the
          Nigeria, You are responsible for compliance with applicable laws,
          including local laws regarding online conduct and content and product
          use, and the Nigerian export laws and regulations.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          14. MONITORING
        </Typography>
        <Typography paragraph>
          Project Lend an Arm has the right, but not the obligation, to monitor
          the content of the Service (including any social or chat forum or
          tools, services or functions that enable the sharing, display or
          performance of any Material), to determine compliance with these Terms
          of Use and any operating rules established by Project Lend an Arm, and
          to satisfy any law, regulation or authorized government request.
          Project Lend an Arm has the right and sole discretion to edit, refuse
          to post, or to remove any Materials submitted to or posted on or
          within the Service, including, without limitation, the right to remove
          any Materials that Project Lend an Arm, in its sole discretion, finds
          to be in violation of the provisions hereof or otherwise
          objectionable.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          15. INDEMNIFICATION
        </Typography>
        <Typography paragraph>
          You agree to indemnify, defend and hold Project Lend an Arm and its
          affiliates and its and their respective governors, directors,
          officers, employees, volunteers, and agents harmless from and against
          any and all claims, actions, demands, damages, costs, liabilities,
          losses and expenses (including reasonable attorneys’ fees and costs)
          arising out of Your use of the Service.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          16. PRIVACY POLICY
        </Typography>
        <Typography paragraph>
          You understand, acknowledge, and agree that the operation of certain
          programs, services, tools, purchase options, materials, or information
          in the Service requires the submission, use and dissemination of
          various personal identifying information. Accordingly, if You wish to
          access and use those programs, services, tools, materials, purchase
          options, or information of the Service, You acknowledge and agree that
          Your use of the Service will constitute acceptance of the personal
          identifying information collection and use practices contained in the
          privacy policies posted on the Service.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          17. GENERAL
        </Typography>
        <Typography paragraph>
          These Terms of Use are governed by and construed in accordance with
          the laws of the Federal Republic of Nigeria, as applied to agreements
          entered into and wholly performed within the Federal Republic of
          Nigeria between Federal Republic of Nigeria residents. Any action or
          proceeding brought by You or Project Lend an Arm shall be brought only
          in a court of competent jurisdiction located in the Federal Republic
          of Nigeria and You and Project Lend an Arm agree to submit to personal
          jurisdiction of those courts for purposes of any action or proceeding.
          These Terms of Use shall not be governed by the 1980 U.N. Convention
          on Contracts for the International Sale of Goods. These Terms of Use
          constitute the entire understanding and agreement between Project Lend
          an Arm and You with respect to the Service and any transactions
          contemplated in these Terms of Use, and supersede all prior or
          contemporaneous oral or written communications with respect to the
          subject matter of these Terms of Use, all of which are merged into
          these Terms of Use. You may not modify, amend or alter in any way
          these Terms of Use. In the event any provision of these Terms of Use
          are found to be invalid or unenforceable pursuant to judicial decree,
          the remainder of these Terms of Use will remain valid and enforceable
          according to its terms. Any failure by Project Lend an Arm to strictly
          enforce any provision of these Terms of Use will not operate as a
          waiver of that provision or any subsequent breach of that provision.
          The disclaimers and limitations of liability will survive any
          termination or expiration of these Terms of Use. It is expressly
          understood and agreed that in the event any remedy hereunder is
          determined to have failed its essential purpose, all limitations of
          liability and exclusions of damages will remain in effect.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          <ArrowBackIcon className={classes.backIcon} />
          Back
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

TermsOfServiceDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TermsOfServiceDialog);
