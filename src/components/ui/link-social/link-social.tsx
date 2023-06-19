import React, { FC } from 'react';
import FolderImg from '../../../assets/images/folder.svg';
import { ISocialData } from '../../../types';
import styles from './styles.module.css';

const LinkSocial: FC<ISocialData> = ({ name, href }) => {
	return (
		<a
			href={href}
			target="_blank"
			className={styles.sotial}
			rel="noreferrer"
		>
			<img src={FolderImg} alt="" />
			{name}
		</a>
	);
};

export default LinkSocial;
