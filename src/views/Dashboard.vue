<template>
  <div class="dashboard flex w-screen h-screen">
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
    <div class="h-full overflow-x-hidden w-4/5">
      <div class="top-search border-b border-fd-border py-4 relative flex justify-between mb-7 w-full items-center">
        <div class="flex justify-between items-center mx-auto w-11/12">
          <img class="absolute mt-0.5 top-5 left-12" src="../assets/img/search.png" alt="search Icon">
          <input class="ml-6 outline-none :focus:outline-none" type="text" name="search" id="search" placeholder="Search...">
          <img src="../assets/img/Header icons.png" alt="header icons">
        </div>
        
      </div>
      <div class="dash-head flex w-11/12 mx-auto items-center justify-between">
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
        class="header relative text-sm flex justify-start font-semibold items-center mx-auto mt-5 text-fd-foot border-b border-fd-border w-11/12"
      >
        <h4
          v-for="(tab, index) in tabs"
          :key="index"
          class="cursor-pointer pb-2 px-1 mr-4 relative"
          :class="{ activeTab: selectedTab === tab }"
          @click="selectedTab = tab"
        >
          {{ tab }}
        </h4>
      </div>
      <div class="thead border-b border-fd-border flex items-center mt-5 pb-3 mx-auto w-11/12">
        <img class="mr-4" src="../assets/img/checkbox.png" alt="checkbox image">
        <h5 class="text-fd-ft pl-5 w-48 font-medium uppercase">amount</h5>
        <h5 class="text-fd-ft w-5/12 font-medium uppercase">description</h5>
        <h5 class="text-fd-ft font-medium w-40 uppercase">customer</h5>
        <h5 class="text-fd-ft font-medium uppercase">date</h5>
      </div>
      <div class="table-content mx-auto flex flex-col w-11/12">
        <div
          v-for="item in data"
          :key="item.name"
          class="tab-item border-b border-fd-border flex items-center py-2 justify-start"
        >
          <img class="mr-4" src="../assets/img/checkbox.png" alt="checkbox image">
          <p class="amount font-medium w-20 text-sm">{{ item.price }}</p>
          <p class="suc-btn rounded font-medium text-xs flex items-center">Succeeded <img class="ml-1" src="../assets/img/mark.png" alt="check mark"></p>
          <p class="desc ml-4 w-5/12 mr-2 text-fd-acc">{{ item.desc }}</p>
          <p class="text-fd-text w-40 text-sm">{{ item.name }}</p>
          <p class="text-fd-text w-40 text-sm">{{ item.date }}</p>
          <img src="../assets/img/more.png" alt="more icons">
        </div>
      </div>
      <div class="tab-after mt-6 px-8 flex items-center justify-between">
        <p class="res text-fd-text font-normal"><span class="font-medium">16</span> results</p>
        <div class="buttons text-fd-text text-sm font-medium flex items-center justify-between">
          <div class="prev flex rounded bg-white items-center justify-center">
            <p class="ml-1">Previous</p>
          </div>
          <div class="nxt ml-2 flex rounded bg-white items-center justify-center">
            <p class="ml-1">Next</p>
          </div>
        </div>
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
        data: [
          {
            price: 'US$352.22',
            desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
            name: 'hefovo87@ereyemind...',
            date: '7 Jul, 14:04',
          },
          {
            price: 'US$39.99',
            desc: '0d7b6ac7-dbda-4157-bae9-e64749e538f5',
            name: 'john.doe@gmail.com',
            date: '7 Jul, 14:01',
          },
          {
            price: 'US$19.99',
            desc: 'eca84b25-0324-4f31-b9fb-d489048b77ae',
            name: 'jfamosinhoaraca@iseo...',
            date: '7 Jul, 13:28',
          },
          {
            price: 'US$19.99',
            desc: '9ce0027a-2429-40aa-bca3-eb9fae9829db',
            name: 'gdontdisable@typery...',
            date: '7 Jul, 13:02',
          },
          {
            price: 'US$142.17',
            desc: '73bb0713-d326-4983-a805-9cef0f15ff3c',
            name: 'psir@typre.com',
            date: '7 Jul, 12:34',
          },
          {
            price: 'US$93.76',
            desc: 'dff08e3b-037e-4fc9-a587-92850d82868e',
            name: 'qomarkhalildubai0@g...',
            date: '7 Jul, 12:16',
          },
          {
            price: 'US$931.00',
            desc: '3005be4a-6d4d-487c-85c3-d61cfe64ef63',
            name: 'kfouzan.saleemc@yah...',
            date: '7 Jul, 11:31',
          },
          {
            price: 'US$19.99',
            desc: '7e960154-e2e2-49eb-9252-edd51f421cd0',
            name: 'asaifah@gmx.com',
            date: '7 Jul, 11:18',
          },
          {
            price: 'US$41.99',
            desc: '88f37e63-c2b2-4c09-aa89-428fc802fe09',
            name: '5mohamad.hamod.5m...',
            date: '7 Jul, 10:46',
          },
          {
            price: 'US$179.98',
            desc: '5a9aae47-1d6a-484e-8305-c75107796cd1',
            name: '7lucyveenstra918@g...',
            date: '7 Jul, 10:12',
          },
          {
            price: 'US$15.17',
            desc: '48eb8b41-9ff0-4d5d-82cc-4b9b820b5f53',
            name: '0sajad@yopmail.com',
            date: '7 Jul, 06:03',
          },
          {
            price: 'US$41.99',
            desc: '02fd1b96-0bba-48aa-8557-81021755b196',
            name: 'feverton78@gmail.com',
            date: '6 Jul, 23:45',
          },
          {
            price: 'US$67.83',
            desc: '986bdfca-6c8d-4f40-b2ae-ed0abacccfce',
            name: 'lsid.ali_blidi@outlook...',
            date: '6 Jul, 23:32',
          },
          {
            price: 'US$35.01',
            desc: 'c5629140-ea34-40d8-97e4-d2986b33275e',
            name: 'twendel.b@yahoo.com',
            date: '6 Jul, 23:30',
          },
          {
            price: 'US$374.93',
            desc: 'c2194818-1485-437c-a389-6164e605d697',
            name: 'pdevonneq@gmail.com',
            date: '6 Jul, 23:16',
          },
          {
            price: 'US$330.91',
            desc: '6583691d-4d9f-43ce-8f2f-0d2d95b30ad4',
            name: 'atotspop886@gmx.com',
            date: '6 Jul, 23:08',
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
<style>
.dashboard {
  min-height: 100vh;
}
.zk-table__body-row {
  height: auto !important;
}
.zk-table__cell-inner {
  font-size: 14px;
  color: #1A1F36;
}
.buttons div {
  box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
  padding: 6px 8px;
}
.activeTab {
  color: #5469D4;
  border-bottom: 2px solid #5469D4;
}
.prev {
  opacity: 0.5;
}
.thead h5 {
  font-size: 11px;
}
.suc-btn {
  background-color: #CBF4C9;
  padding: 1px 4px 1px 6px;
  color: #0E6245;
}
.desc {
  font-size: 13px;
}
</style>