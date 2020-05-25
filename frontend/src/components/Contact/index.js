import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import SendIcon from '@material-ui/icons/Send';

import { Container, Content, FormGroup, Title } from './styles';

import { sendContact } from '../../store/modules/post/actions';

function Contact({ status, setStatus }) {
  const dispatch = useDispatch(); 
  const closeModal = () => setStatus(false);

  function submitContact(e) {
    e.preventDefault();
    const name = document.querySelector('#name_id').value;
    const email = document.querySelector('#email_id').value;
    const phone = document.querySelector('#phone_id').value;
    const post = document.querySelector('#post_id').value;
    const data = { name, email, phone, post };
    console.log(data);
    dispatch(sendContact(data));
  }

  return(
    <Modal
      open={status}
      onClose={closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Container>
        <Content>
          <Title>Contact</Title>
          <form onSubmit={submitContact}>
            <FormGroup>
              <label>Name</label>
              <input
                id="name_id"
                name="name"
                placeholder="Fill your full name"
              />
            </FormGroup>

            <FormGroup>
              <label>E-Mail</label>
              <input
                id="email_id"
                name="email"
                type="email"
                placeholder="Fill a valid e-mail"
              />
            </FormGroup>

            <FormGroup>
              <label>Phone</label>
              <input
                id="phone_id"
                name="phone"
                placeholder="Fill your phone"
              />
            </FormGroup>

            <FormGroup>
              <label>Posts</label>
              <textarea
                id="post_id"
                name="phone"
                rows="4"
                placeholder="Fill your phone"
              />
            </FormGroup>

            <button type="submit">
              <SendIcon /> Submit
            </button>
          </form>
        </Content>
      </Container>
    </Modal>
  );
}

export default Contact;