<template>
  <div class="q-pa-md">
    <h1>Sales Sessions</h1>
    <q-btn color="primary" label="Load Dummy Data" @click="loadDummySessions" class="q-mb-md" />

    <q-table
      title="Session Reports"
      :rows="sessions"
      :columns="columns"
      row-key="id"
      flat
    />
  </div>
</template>

<script setup lang="ts">
import { useSessionsStore } from './stores/sessionsStore'
import { computed } from 'vue'

const store = useSessionsStore()

// Load dummy data
const loadDummySessions = () => {
  store.loadDummySessions()
}

const sessions = computed(() => store.sessions)

const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'left' },
  { name: 'date', label: 'Date', field: 'date', align: 'left' },
  { name: 'storeName', label: 'Store Name', field: 'storeName', align: 'left' },
  { name: 'totalSales', label: 'Total Sales', field: 'totalSales', align: 'right' },
  { name: 'kpi', label: 'KPI', field: 'kpi', align: 'left' }
]
</script>
