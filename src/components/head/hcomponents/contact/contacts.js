import './contacts.css';

function Contacts (){
    return (

        <main>
        <div class="contact_container">
            <div class="map_adress">
            <h2>Our Store</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.76803966071145!2d39.62827300981992!3d47.21375842791901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9127472a9fd%3A0xe66c0beb6dea7339!2z0K7QpNCjINCk0LDQutGD0LvRjNGC0LXRgiDQo9C_0YDQsNCy0LvQtdC90LjRjw!5e0!3m2!1sru!2sru!4v1681744598057!5m2!1sru!2sru" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="feedback_container">
        <div class="feedback">
        <div class="contact">Contact Us</div>
    <div class="name">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
    </div>
    <div class="last_name">
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" lastname="lastname" required />
    </div>
    <div class="email">
        <label for="email">E-mail:</label>
        <input type="text" id="email" email="email" required />
    </div>
    <div class="number">
        <label for="number">Number:</label>
        <input type="text" id="number" number="number" required />
    </div>
    <div class="question">
        <label for="question">Your Questions:</label>
        <input type="text" id="question" question="question" />
    </div>
        <button id="btn_send">Send</button>
    </div>
</div>
</div>
    </main>

    );
}

export default Contacts;