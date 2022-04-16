<template>
  <section class="about-contacts">
    <div class="about-contacts__title">
      Наша команда
    </div>
    <div class="about-contacts__cards">
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="contact-card"
      >
        <div class="contact-card__image-wrapper">
            <img
            class="contact-card__image"
            :src="item.image"
            >
        </div>
        <h3 class="contact-card__title">
          {{ item.title }}
        </h3>
        <p class="contact-card__text">
          <a :href="`tel:${item.phone}`">{{ item.phone }}</a>
        </p>
        <p class="contact-card__text">
          <a :href="`mailto:${item.email}`">{{ item.email }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Contacts-page",

    data() {
        return {
            cards: [
                {
                    title: 'Веб-разработчик',
                    phone: '8-999-999-11-99',
                    image: require('@/assets/contacts/1.webp'),
                    email: 'someemail@mail.ru',
                },
                {
                    title: 'Фронтенд-разработчик',
                    phone: '8-999-999-11-99',
                    image: require('@/assets/contacts/2.jpeg'),
                    email: 'someemail@mail.ru',
                },
                {
                    title: 'Бекенд-разработчик',
                    phone: '8-999-999-11-99',
                    image: require('@/assets/contacts/3.jpg'),
                    email: 'someemail@mail.ru',
                },
                {
                    title: 'Веб-разработчик',
                    phone: '8-999-999-11-99',
                    image: require('@/assets/contacts/4.webp'),
                    email: 'someemail@mail.ru',
                }
            ]
        };
    },

};
</script>

<style lang="scss" scoped>
.about-contacts {
  padding-top: 80px;
  padding-bottom: 80px;
  width: 100%;
  font-style: normal;
  color: black;
  font-weight: 500;

  &__title {
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    margin-bottom: 60px;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 576px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
    }
  }

  .contact-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 340px;
    height: 530px;
    padding: 20px;
    background: lightgrey;
    border-radius: 20px;
    margin: 0 auto;

    &__title {
      margin: 20px 0 16px;
      font-size: 16px;
      line-height: 20px;
    }

    &__text {
      max-width: 340px;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: gray;
      text-align: center;
    }
    &__image-wrapper {
        width: 100%;
        padding-bottom: 130%;
        position: relative;
        overflow: hidden;
        border-radius: 16px;
    }
    &__image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
        min-width: 100%;
        min-height: 100%;
    }
  }
}
</style>

