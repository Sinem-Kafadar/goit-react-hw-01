import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.card}>
    <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
    <p className={styles.name}>{name}</p>
    <p className={isOnline ? styles.online : styles.offline}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);

export default FriendListItem;