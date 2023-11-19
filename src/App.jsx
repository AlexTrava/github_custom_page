import "./App.css";

function App() {
  return (
    <>
      <header class="header">
        <div class="header_wrapper center">
          <img src="../src/img/logo.svg" alt="logo" class="logo" />
          <form action="#" class="form_header">
            <input
              type="text"
              class="header_input"
              placeholder="Enter GitHub Username"
            />
            <svg
              enableBackground="new 0 0 32 32"
              height="32px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
              class="search_img"
            >
              <g id="search_1_">
                <path
                  d="M20,0.005c-6.627,0-12,5.373-12,12c0,2.026,0.507,3.933,1.395,5.608l-8.344,8.342l0.007,0.006   C0.406,26.602,0,27.49,0,28.477c0,1.949,1.58,3.529,3.529,3.529c0.985,0,1.874-0.406,2.515-1.059l-0.002-0.002l8.341-8.34   c1.676,0.891,3.586,1.4,5.617,1.4c6.627,0,12-5.373,12-12C32,5.378,26.627,0.005,20,0.005z M4.795,29.697   c-0.322,0.334-0.768,0.543-1.266,0.543c-0.975,0-1.765-0.789-1.765-1.764c0-0.498,0.21-0.943,0.543-1.266l-0.009-0.008l8.066-8.066   c0.705,0.951,1.545,1.791,2.494,2.498L4.795,29.697z M20,22.006c-5.522,0-10-4.479-10-10c0-5.522,4.478-10,10-10   c5.521,0,10,4.478,10,10C30,17.527,25.521,22.006,20,22.006z"
                  fill="#333333"
                />
                <path
                  d="M20,5.005c-3.867,0-7,3.134-7,7c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-3.313,2.686-6,6-6   c0.275,0,0.5-0.224,0.5-0.5S20.275,5.005,20,5.005z"
                  fill="#333333"
                />
              </g>
            </svg>
          </form>
        </div>
      </header>
      <section class="middle_content center">
        <div class="profile_card">
          <img src="../src/img/avatar_1.jpg" alt="#" class="profile_img" />
          <h2 class="profile_name">dan</h2>
          <a href="https://github.com/AlexTrava" class="profile_link">
            gaeron
          </a>
          <div class="profile_info">
            <div class="profile_followers">
              <img src="#" alt="" class="profile_folowers_img" />
              <p class="followers">851k followers</p>
            </div>
            <div class="profile_following">
              <img src="" alt="" class="profile_following_img" />
              <p class="following">172 following</p>
            </div>
          </div>
        </div>
        <div class="info_repos">
          <h2 class="h_repositories">Repositories (282)</h2>
          <div class="quantity_repos">
            <div class="card_repos">
              <a href="#" class="link_repos">
                hsadad
              </a>
              <p class="title_repos">simple app</p>
            </div>
            <div class="card_repos">
              <a href="#" class="link_repos">
                hsadad
              </a>
              <p class="title_repos">simple app</p>
            </div>
            <div class="card_repos">
              <a href="#" class="link_repos">
                hsadad
              </a>
              <p class="title_repos">simple app</p>
            </div>
            <div class="card_repos">
              <a href="#" class="link_repos">
                hsadad
              </a>
              <p class="title_repos">simple app</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;