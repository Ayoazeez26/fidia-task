<template>
  <div class="dasboard flex w-screen h-screen">
    <div class="h-full text-fd-ft text-sm pt-3 pl-4 w-1/5 bg-fd-bgt">
      <div class="head flex mb-8 items-center">
        <div class="store-img bg-white rounded-full flex items-center justify-center p-2">
          <img src="../assets/img/store.svg" alt="store svg">
        </div>
        <p class="text-base ml-2 text-medium">Store name</p>
        <img class="ml-3" src="../assets/img/arrow-down.svg" alt="arrow-down icon">
      </div>
      <div class="home flex mb-6 items-center">
        <img src="../assets/img/home.svg" alt="home icon">
        <p class="ml-4 text-sm">Home</p>
      </div>
      <div class="payments flex mb-3 items-center">
        <img src="../assets/img/payments.svg" alt="payments icon">
        <p class="ml-4 text-fd-blu text-sm">Payments</p>
      </div>
      <div class="pay-sub mt-3 ml-8">
        <p class="mb-2">Reviews</p>
        <p class="mb-2">Disputes</p>
        <p class="mb-2">Top-ups</p>
        <p class="mb-2">Collected fees</p>
        <p class="mb-2">Transfers</p>
        <p class="mb-2">Payouts</p>
        <p class="mb-2">All transactions</p>
      </div>
      <div class="rem flex flex-col mt-6 items-start">
        <div class="flex mb-3 items-center">
          <img src="../assets/img/balances.png" alt="balances icon">
          <p class="ml-4 text-sm">Balances</p>
        </div>
        <div class="flex mb-3 items-center">
          <img src="../assets/img/customers.png" alt="customers icon">
          <p class="ml-4 text-sm">Customers</p>
        </div>
        <div class="flex mb-3 items-center">
          <img src="../assets/img/connect.png" alt="connected accounts icon">
          <p class="ml-4 text-sm">Connected accounts</p>
        </div>
        <div class="flex mb-3 items-center">
          <img src="../assets/img/product.png" alt="product icon">
          <p class="ml-4 text-sm">Products</p>
        </div>
        <div class="flex mb-7 items-center">
          <img src="../assets/img/report.png" alt="report icon">
          <p class="ml-4 text-sm">Reports</p>
        </div>
        <div class="flex mb-3 items-center">
          <img src="../assets/img/develop.png" alt="develop icon">
          <p class="ml-4 text-sm">Developers</p>
        </div>
        <div class="flex mb-3 items-center">
          <img src="../assets/img/toggle.png" alt="toggle icon">
          <p class="ml-4 text-sm">View test data</p>
        </div>
        <div class="flex mb-3 items-center">
          <img src="../assets/img/settings.png" alt="settings icon">
          <p class="ml-4 text-sm">Settings</p>
        </div>
      </div>
    </div>
    <div class="h-full w-4/5">
    <div class="top-search border-b border-fd-border py-4 px-8 relative flex justify-between mb-7 items-center">
      <img class="absolute mt-0.5 top-5 left-9" src="../assets/img/search.png" alt="search Icon">
      <input class="ml-6 outline-none :focus:outline-none" type="text" name="search" id="search" placeholder="Search...">
      <img src="../assets/img/Header icons.png" alt="header icons">
    </div>
    <div class="dash-head flex px-8 items-center justify-between">
      <h1 class="font-bold text-3xl text-fd-ft">Payments</h1>
      <div class="buttons text-fd-text text-sm font-medium flex items-center justify-between">
        <div class="fil flex rounded bg-white items-center justify-between">
          <img src="../assets/img/filter.png" alt="filter icon">
          <p class="ml-1">Filter</p>
        </div>
        <div class="exp ml-2 flex rounded bg-white items-center justify-between">
          <img src="../assets/img/export.png" alt="export icon">
          <p class="ml-1">Export</p>
        </div>
        <div class="exp ml-2 flex rounded bg-fd-blu items-center justify-between">
          <img src="../assets/img/payment.png" alt="create payment icon">
          <p class="ml-1 text-white">Create Payment</p>
        </div>
      </div>
    </div>
    <div
      class="header relative text-sm flex justify-start font-semibold items-center mt-5 text-fd-foot border-b border-fd-border w-full"
    >
      <h4
        v-for="(tab, index) in tabs"
        :key="index"
        class="cursor-pointer pb-2 px-1 ml-7 relative"
        :class="{ activeTab: selectedTab === tab }"
        @click="selectedTab = tab"
      >
        {{ tab }}
      </h4>
    </div>
    <div class="w-full mt-5 px-8">
      <zk-table
        ref="table"
        sum-text="sum"
        index-text="#"
        :data="data"
        :columns="columns"
        :stripe="props.stripe"
        :border="props.border"
        :show-header="props.showHeader"
        :show-summary="props.showSummary"
        :show-row-hover="props.showRowHover"
        :show-index="props.showIndex"
        :tree-type="props.treeType"
        :is-fold="props.isFold"
        :expand-type="props.expandType"
        :selection-type="props.selectionType">
        
      </zk-table>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'example',
    data() {
      return {
        tabs: ['All', 'Succeeded', 'Refunded', 'Uncaptured'],
        selectedTab: "Succeeded",
        props: {
          stripe: false,
          border: false,
          showHeader: true,
          showSummary: false,
          showRowHover: true,
          showIndex: false,
          treeType: true,
          isFold: true,
          expandType: false,
          selectionType: true,
        },
        data: [
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
        ],
        columns: [
          {
            label: 'AMOUNT',
            prop: 'price',
            width: '200px',
          },
          {
            label: 'DESCRIPTION',
            prop: 'desc',
            minWidth: '500px',
          },
          {
            label: 'CUSTOMER',
            prop: 'name',
            minWidth: '160px',
          },
          {
            label: 'DATE',
            prop: 'date',
            minWidth: '80px',
          },
        ],
      };
    },
    computed: {
      propList() {
        return Object.keys(this.props).map(item => ({
          name: item,
        }));
      },
    },
    methods: {
    },
  };
</script>
<style scoped>
.buttons div {
  box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
  padding: 6px 8px;
}
.activeTab {
  color: #5469D4;
  border-bottom: 2px solid #5469D4;
}
</style>