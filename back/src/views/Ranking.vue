<template>
  <div>
    <div class="select-box">
      <div
        v-for="(mod, idx) in rankingMods"
        :key="idx"
        class="ranking-mods-item"
        :class="rankingModsClass(idx)"
        :style="rankingMod === idx ? 'background-color: red;':''"
        @click="rankingMod = idx"
      >
        {{ mod }}
      </div>
    </div>
    <div class="select-box">
      <div
        v-for="(mod, idx) in gameMods"
        :key="idx"
        style="width: 25%; padding: 15px; transition: .3s ease;"
        :style="gameMod === idx ? 'background-color: red;':''"
        :class="gameModsClass(idx)"
        @click="gameMod = idx"
      >
        {{ mod }}
      </div>
    </div>

    <div class="box">
      <a-spin
        :spinning="fetching"
        :delay="100"
      >
        <div style="padding: 30px;">
          <div style="display: flex; padding: 8px;">
            <div class="column-ranking">
              排名
            </div>
            <div class="column-flag" />
            <div class="column-username" />
            <div class="column-pp">
              PP
            </div>
            <div class="column-acc">
              准确率
            </div>
            <div class="column-score">
              总分
            </div>
            <div class="column-pc">
              游玩次数
            </div>
            <div class="column-tth">
              点击次数
            </div>
            <div class="column-pctth">
              PC质量
            </div>
          </div>

          <div v-if="currentRanking.length>0">
            <div
              v-for="(data, idx) in currentRanking"

              :key="idx"
              style="background-color: purple; display: flex; padding: 8px; border-radius: 8px; line-height: 40px;"
            >
              <div class="column-ranking">
                #{{ idx + 10000 }}
              </div>
              <div class="column-flag">
                <img
                  :src="`https://osu.ppy.sh/images/flags/${data.country}.png`"
                  style="width: 100%;"
                >
              </div>
              <div class="column-username">
                {{ data.username }}
              </div>
              <div class="column-pp">
                {{ getNumbFormated(data.chosen_mode.pp) }}
              </div>

              <div class="column-acc">
                {{ data.chosen_mode.accuracy.toString().slice(0, 5) }}%
              </div>

              <div class="column-score">
                {{ getNumbFormated(data.chosen_mode.ranked_score) }}
              </div>
              <div class="column-pc">
                {{ getNumbFormated(data.chosen_mode.playcount) }} (Level.{{ data.chosen_mode.level.toString().split('.')[0] }})
              </div>
              <div class="column-tth">
                {{ getNumbFormated(data.chosen_mode.total_hits) }}
              </div>
              <div class="column-pctth">
                {{ getNumbFormated((data.chosen_mode.total_hits / data.chosen_mode.playcount).toFixed(0)) }}
              </div>
            </div>
          </div>
          <div
            v-else
            style="background-color: blue; padding: 20px; text-align: center; border-radius: 8px; font-size: 18px; font-weight: lighter;"
          >
            呃哦...暂时没有数据哦，不如你来成为这里的第一位吧！
          </div>
        </div>
      </a-spin>
    </div>
    <div style="width: 80%; padding: 20px; background-color: purple; margin: 0; border-radius: 8px; display: flex; justify-content: space-between;">
      <div style="background-color: orange; padding: 10px; border-radius: 8px; user-select: none; cursor: pointer;">
        上一页
      </div>
      <div style="background-color: orange; padding: 10px; border-radius: 8px; user-select: none; cursor: pointer;">
        下一页
      </div>
    </div>
  </div>
</template>

<script>
import $backend from '@/backend'

export default {
  data () {
    return {
      fetching: false,
      rankingMod: 0,
      gameMod: 0,
      page: 0,
      country: '',
      columns: ['排名', '用户名', 'pc', 'acc', 'pp', '等级', '分数'],
      rankingMods: ['常规', 'Relax'],
      gameMods: ['osu!standard', 'Taiko', 'Catch the Beat', 'osu!mania'],
      currentRanking: []
    }
  },
  computed: {
    rankingModsClass (idx) {
      return (idx) => { return (idx === 0) ? 'left-radius' : 'right-radius' }
    },
    gameModsClass (idx) {
      return (idx) => { return (idx === 0) ? 'left-radius' : (idx === 3) ? 'right-radius' : '' }
    }
  },
  watch: {
    gameMod (e) {
      this.fetchData()
    },
    rankingMod (e) {
      this.fetchData()
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      this.fetching = true
      const ranking = await $backend.fetchRanking(this.gameMod, this.page, this.rankingMod, this.country)
      this.fetching = false
      if (ranking.users) {
        this.currentRanking = ranking.users
        console.log(this.currentRanking)
      } else {
        this.currentRanking = []
      }
    },
    getNumbFormated (num) {
      const done = (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      return done
    }
  }
}
</script>

<style scoped>
.box {
  background-color: green;
  border-radius: 8px;
  margin-top: 40px;
  width: 80%;
  margin: 30px 0;
}

.column-ranking {
  width: 120px;
  padding: 0 10px;
}

.column-username {
  width: 270px;
  padding: 0 10px;
}

.column-level {
  width: 100px;
  padding: 0 10px;
}

.column-pc {
  width: 200px;
  padding: 0 10px;
}

.column-pp {
  width: 130px;
  padding: 0 10px;
}

.column-acc {
  width: 130px;
  padding: 0 10px;
}

.column-score {
  width: 200px;
  padding: 0 10px;
}

.column-tth {
  width: 150px;
  padding: 0 10px;
}

.column-flag {
  min-width: 40px;
  width: 40px;
  margin-left: 20px;
}

.column-pctth {
  width: 100px;
  padding: 0 10px;
}

.left-radius {
  border-radius: 8px 0 0 8px;
}

.right-radius {
  border-radius: 0 8px 8px 0;
}

.ranking-mods-item {
  width: 50%;
  padding: 15px;
  background-color: orange;
  transition: .3s ease;
}

.select-box {
  display: flex;
  justify-content: center;
  width: 80%;
  text-align: center;
  margin: 30px 0;
  background-color:green;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
</style>
