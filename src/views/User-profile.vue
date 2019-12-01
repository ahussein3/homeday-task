<template>
  <div class="box-container">
    <div class="profile-card" v-if="Object.keys(UserProfile).length > 0">
      <img class="avatar" :src="UserProfile.avatar_url" alt="user avatar" />
      <h2 v-if="UserProfile.name">
        Welcome
        <span class="text-color">{{ UserProfile.name }}</span>
      </h2>
      <div v-if="UserProfile.location">
        <svgicon
          class="location-icon"
          name="location"
          width="15"
          height="12"
          color="#ea2803"
        ></svgicon
        >location:
        <span class="text-color">{{ UserProfile.location }}</span>
      </div>
      <div class="follow-info">
        <div class="follow-section">
          followers
          <span class="follow-number">{{ UserProfile.followers }}</span>
        </div>
        <div class="follow-section">
          followings
          <span class="follow-number">{{ UserProfile.following }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import "@/assets/svg-js/location";

export default {
  props: {},
  watch: {
    "$route.params": {
      handler({ userName }) {
        if (userName !== this.UserProfile.userName) {
          this.getProfileData(userName);
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      UserProfile: state => state.userProfile
    })
  },
  data() {
    return {};
  },
  methods: {
    getProfileData(userName) {
      this.$store.dispatch("getUserProfile", userName);
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.box-container {
  .profile-card {
    padding: 50px;
  }
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid $primary;
  }
  .location-icon {
    margin-right: 2px;
  }
  .follow-info {
    .follow-section {
      display: inline-block;
      padding: 10px;
      .follow-number {
        color: $primary;
      }
    }
  }
  .text-color {
    color: $primary;
  }
}
</style>
