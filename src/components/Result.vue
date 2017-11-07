<template slot="item" scope="data">
    <v-container>
        {{data.title}}
        <!-- <v-list-tile-avatar>
            <img v-bind:src="state.item.avatar"/>
        </v-list-tile-avatar>
        <v-list-tile-content>
            <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
        </v-list-tile-content> -->
    </v-container>
</template>