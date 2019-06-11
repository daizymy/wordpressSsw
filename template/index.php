<?php
return '
  <div class="container" id="schwangerschaftPlugin" style= "padding: 0;" data-imageurl="'. $imagePath . 'img/" data-selected-week="' . $selectedWeek . '">
      <div class="row justify-content-center">
        <p class="h2 text-center">Lorem Ipsum</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-6">
          <select class="custom-select" id="pregnanceWeek">
             <option value="1" selected>1 Woche</option>
             <option value="2">2 Woche</option>
             <option value="3">3 Woche</option>
             <option value="4">4 Woche</option>
             <option value="5">5 Woche</option>
             <option value="6">6 Woche</option>
             <option value="7">7 Woche</option>
             <option value="8">8 Woche</option>
             <option value="9">9 Woche</option>
             <option value="10">10 Woche</option>
             <option value="11">11 Woche</option>
             <option value="12">12 Woche</option>
             <option value="13">13 Woche</option>
           </select>
         </div>
      </div>
      <div class="row justify-content-center">
           <div class="content">
             <p class="h4 text-center">Lorem Ipsum</p>
             <p class="h5 text-center">Lorem Ipsum</p>
           </div>
      </div>
      <div class="row justify-content-center">
        <button class="w3-button previous" id="js-previous">‹</button>
        <button class="w3-button next" id="js-next">›</button>
      </div>
      <p id="textWeeks" class="card-text"></p>

      <div class="row justify-content-center">
        <div class="col-2">
          <a href="#" id="js-week-link"><button type="button" id="schwButton" class="btn btn-primary">Was passiert in der Woche <span>1</span>?</button></a>
        </div>
      </div>
      <div class="row justify-content-center">
          <ul class="share-buttons-wrapper">
            <li style="background-color:#4273c8">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.babyartikel.de%2Fmagazin%2Fschwangerschaftskalender"
              data-js="facebook-share"
              title="Bei Facebook teilen"
              rel="nofollow"
              style="background-color:#3b5998; color:#fff;">
                <span class="share-icon">
                  <svg width="32px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 32">
                    <path fill="#FFF" d="M17.1 0.2v4.7h-2.8q-1.5 0-2.1 0.6t-0.5 1.9v3.4h5.2l-0.7 5.3h-4.5v13.6h-5.5v-13.6h-4.5v-5.3h4.5v-3.9q0-3.3 1.9-5.2t5-1.8q2.6 0 4.1 0.2z"></path>
                  </svg>
                </span>
                <span class="share-button-text">teilen</span>
              </a>
            </li>
            <li style="background-color:#32bbf5">
              <a href="https://twitter.com/share?url=https%3A%2F%2Fwww.babyartikel.de%2Fmagazin%2Fschwangerschaftskalender&amp;text=Dein%20pers%C3%B6nlicher%20Schwangerschaftskalender"
                data-js="twitter-share"
                title="Bei Twitter teilen"
                rel="nofollow"
                style="background-color:#55acee;">
                  <span class="share-icon">
                    <svg width="32px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32">
                      <path fill="#FFF" d="M29.7 6.8q-1.2 1.8-3 3.1 0 0.3 0 0.8 0 2.5-0.7 4.9t-2.2 4.7-3.5 4-4.9 2.8-6.1 1q-5.1 0-9.3-2.7 0.6 0.1 1.5 0.1 4.3 0 7.6-2.6-2-0.1-3.5-1.2t-2.2-3q0.6 0.1 1.1 0.1 0.8 0 1.6-0.2-2.1-0.4-3.5-2.1t-1.4-3.9v-0.1q1.3 0.7 2.8 0.8-1.2-0.8-2-2.2t-0.7-2.9q0-1.7 0.8-3.1 2.3 2.8 5.5 4.5t7 1.9q-0.2-0.7-0.2-1.4 0-2.5 1.8-4.3t4.3-1.8q2.7 0 4.5 1.9 2.1-0.4 3.9-1.5-0.7 2.2-2.7 3.4 1.8-0.2 3.5-0.9z"></path>
                    </svg>
                  </span>
                  <span class="share-button-text">twittern</span>
              </a>
            </li>
          </ul>
    </div>
  </div>';
