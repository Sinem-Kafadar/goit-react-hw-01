// Profile.jsx
import css from "./Profile.module.css"; 

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={css.profileCard}>
      {/* Üst Kısım: Kullanıcı Bilgileri */}
      <div className={css.userInfo}>
        <img
          src={image}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      {/* Alt Kısım: İstatistikler */}
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsValue}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsValue}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
