import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseImg from '../../../assets/images/close.svg';
import ErrorImg from '../../../assets/images/error.svg';
import OkImg from '../../../assets/images/ok.svg';
import { useAppDispatch } from '../../../utils/hooks/redux-hooks';
import { reset } from '../../../store/slices/form-slice';
import { goToIndexStep } from '../../../store/slices/navigation-slice';
import styles from './styles.module.css';

interface ModalProps {
	statusOk: boolean;
	setShowModal: (show: boolean) => void;
}
const Modal: FC<ModalProps> = ({ statusOk, setShowModal }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<div className={styles.popup}>
			<div className={styles.popupFlex}>
				<div className={styles.popupBlock}>
					{statusOk ? (
						<div className={styles.popupContent}>
							<div className={styles.okTitle}>
								Форма успешно отправлена
							</div>
							<div className={styles.popupImg}>
								<img src={OkImg} alt="ok" />
							</div>
							<button
								id="button-to-main"
								onClick={() => {
									dispatch(reset());
									dispatch(goToIndexStep(0));
									navigate('/');
								}}
								className="button buttonNext"
							>
								На главную
							</button>
						</div>
					) : (
						<div className={styles.popupContent}>
							<div className={styles.popupHeader}>
								<div className={styles.okTitle}>Ошибка</div>
								<button
									onClick={() => setShowModal(false)}
									className={styles.popupClose}
								>
									<img src={CloseImg} alt="" />
								</button>
							</div>
							<div
								className={`${styles.popupImg} ${styles.bgRed}`}
							>
								<img src={ErrorImg} alt="ok" />
							</div>
							<button
								id="button-close"
								onClick={() => setShowModal(false)}
								className="button buttonNext buttonEnd"
							>
								Закрыть
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
