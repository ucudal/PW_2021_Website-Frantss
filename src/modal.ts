import { postSubmitForm } from './api.js';

const modal = document.getElementById('modal')!;
const cancelModal = document.getElementById('cancel-modal')!;
const submitModal = document.getElementById('submit-modal')!;
const contact = document.getElementById('contact')!;

const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const messageInput = document.getElementById('message') as HTMLInputElement;

export const submitModalForm = (event: any) => {
  event.preventDefault();

  modal.style['visibility'] = 'hidden';

  postSubmitForm({
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  });

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
};

export const toggleModalVisibility = (event: MouseEvent) => {
  event.preventDefault();
  console.log('dsds');
  if (!modal) return;

  if (modal.style['visibility'] === 'hidden') {
    modal.style['visibility'] = 'visible';
  } else {
    modal.style['visibility'] = 'hidden';
  }
};

modal.onsubmit = submitModalForm as any;
cancelModal.onclick = toggleModalVisibility;
contact.onclick = toggleModalVisibility;
