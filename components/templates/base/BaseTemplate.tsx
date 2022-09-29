import styles from './BaseTemplate.module.scss';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.c}>{sampleTextProp}</div>;
};

export default BaseTemplate;
