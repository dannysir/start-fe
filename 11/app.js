import {openModal} from './modal';

$btn.addEventListener('click', () => {
    openModal({
        text: '모달입니다.',
    });
});