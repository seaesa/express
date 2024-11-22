import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { http } from '../../service/axios'
import { Post, User } from "../../types";
const Profile: React.FC = (): JSX.Element => {
  const { idUser } = useParams()
  const [user, setUser] = useState<User | null>(null)
  const [post, setPost] = useState<Array<Post>>([]);

  useEffect(() => {
    (async () => {
      const user: any = await http.get(`/users/${idUser}`)
      if (user.user) setUser(user.user)
    })()
  }, [idUser])
  useEffect(() => {
    if (user && user!._id)
      (async () => {
        const post: any = await http.post('/posts/active', { id: user!._id });
        setPost(post.data)
      })()
  }, [user])
  return (
    <>
      {user && (
        <>
          <header className=''>

            <div className={`container mx-auto`}>

              <div className="profile">

                <div className="profile-image">

                  <img src={user.avatar} alt="" />

                </div>

                <div className="profile-user-settings">

                  <h1 className="profile-user-name">{user.username}</h1>

                  <button className="btn profile-edit-btn">Edit Profile</button>

                  <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

                </div>

                <div className="profile-stats">

                  <ul>
                    <li><span className="profile-stat-count">164</span> posts</li>
                    <li><span className="profile-stat-count">188</span> followers</li>
                    <li><span className="profile-stat-count">206</span> following</li>
                  </ul>

                </div>

                <div className="profile-bio">

                  <p><span className="profile-real-name">{user.displayName}</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

                </div>

              </div>

            </div>

          </header>

          <main>

            <div className={`container mx-auto`}>

              <div className="gallery">
                {post.map(post => (
                  <Link to={`/post/${post.slug}`} className="gallery-item" tabIndex={0}>

                    <img src={post.image} className="gallery-image" alt="" />

                    <div className="gallery-item-info">

                      <ul>
                        <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                        <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                      </ul>

                    </div>

                  </Link>
                ))}

              </div>

              {/* <div className="loader"></div> */}

            </div>

          </main>
        </>
      )}
    </>
  )
}

export default Profile
