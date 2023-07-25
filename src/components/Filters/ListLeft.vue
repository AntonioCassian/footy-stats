<template>
    <div class="div">
        <b-list-group>
            <ListItem v-for="li in list" :key="li.id" :text="li.text"/>
        </b-list-group>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
    name: 'ListLeft',
    components: {ListItem},
    data() {
        return {
            list: [
                {'id': 0, 'text': 'Both Teams to Score(BTTS)'},
                {'id': 1, 'text': 'Scored in Both Halves'},
                {'id': 2, 'text': 'Offsides'},
                {'id': 3, 'text': 'Clean Sheets'},
                {'id': 4, 'text': 'Over 2.5 Goals'},
                {'id': 5, 'text': 'Under 2.5 Goals'},
                {'id': 6, 'text': 'XG'},
                {'id': 7, 'text': 'Corner Stats'},
                {'id': 8, 'text': 'Yellow and Red Cards'},
                {'id': 9, 'text': 'Correct Scores'},
                {'id': 10, 'text': 'Win Draw Win'},
                {'id': 11, 'text': 'Home Advantage'},
                {'id': 12, 'text': '1st als and 2nd Hals Goals'},
                {'id': 13, 'text': 'Penalties'}
            ]
        }
    }
}
</script>