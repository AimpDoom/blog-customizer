import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './../../constants/articleProps';

import styles from './app.module.scss';

export const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};
	const handleClose = () => {
		setIsOpen(false);
	};
	const [articleState, setArticleState] = useState(defaultArticleState);
	const handleApply = (settings: ArticleStateType) => {
		setArticleState(settings);
	};
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isOpen}
				onOpen={handleToggle}
				onClose={handleClose}
				onApply={handleApply}
			/>
			<Article />
		</main>
	);
};
