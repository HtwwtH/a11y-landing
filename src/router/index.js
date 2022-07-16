import { createRouter, createWebHistory } from 'vue-router'
import HamstersPage from '@/pages/HamstersPage.vue'
import GuineaPigsPage from '@/pages/GuineaPigsPage.vue'
import RatsPage from '@/pages/RatsPage.vue'

const routes = [
  {
    path: '/',
    name: 'HamstersPage',
    component: HamstersPage,
    meta: {
      title: 'Магазин для грызунов - товары для хомяков (от Алины Поважнюк)',
      metaTags: [
        {
          name: 'description',
          content: 'Товары для хомяков.'
        },
        {
          property: 'og:description',
          content: 'Товары для хомяков.'
        }
      ]
    }
  },
  {
    path: '/guinea-pigs',
    name: 'GuineaPigsPage',
    component: GuineaPigsPage,
    meta: {
      title: 'Магазин для грызунов - товары для морских свинок (от Алины Поважнюк)',
      metaTags: [
        {
          name: 'description',
          content: 'Товары для морских свинок.'
        },
        {
          property: 'og:description',
          content: 'Товары для морских свинок.'
        }
      ]
    }
  },
  {
    path: '/rats',
    name: 'RatsPage',
    component: RatsPage,
    meta: {
      title: 'Магазин для грызунов - товары для крыс (от Алины Поважнюк)',
      metaTags: [
        {
          name: 'description',
          content: 'Товары для крыс.'
        },
        {
          property: 'og:description',
          content: 'Товары для крыс.'
        }
      ]
    }
  }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

// adding titles and meta
router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    if(nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
    } else if(previousNearestWithMeta) {
      document.title = previousNearestWithMeta.meta.title;
    }
  
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  
    if(!nearestWithMeta) return next();
  
    nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');
  
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute('data-vue-router-controlled', '');
  
      return tag;
    })

    .forEach(tag => document.head.appendChild(tag));
  
    next();
  });

export default router;