<script>
import Layout from '../layouts/default.vue'
export default {
  components: { Layout },
}
</script>

<template>
  <Layout title="Tools I use" class="mx-auto py-6 px-4 container">
    <h1 class="text-4xl">Uses</h1>
    <p>
      There are times where people ask me about what software or gear I am using. This page will serve as a living
      document for people to always know the latest and greatest.
    </p>

    <section class="mt-10">
      <h2 class="text-3xl">Hardware</h2>

      <section class="mt-6">
        <h3 class="text-xl text-bold">
          Primary Machine
        </h3>

        <p class="mb-4">
          <AppLink to="https://amzn.to/2JiRg5H" external
            >MacBook Pro (15-inch, 2018) 2.2 GHz 6-Core Intel Core i7 with 16 GB 2400 MHz DDR4 RAM and 256GB
            Storage</AppLink
          >
        </p>

        <p>
          If I get to choose again, I would probably go for a 13-inch MacBook Pro with maxed-out specs as it's more
          compact and portable. For now, I am hoping for a Ryzen based MacBook Pro lineup.
        </p>
      </section>

      <section class="mt-6">
        <h3 class="text-xl text-bold">
          Mobile Devices
        </h3>

        <p class="mb-4">
          <AppLink to="https://amzn.to/2BEAxWa" external>Apple iPhone XR (64GB) - Black</AppLink> <br />

          It's quite heavier and larger than my last phone (iPhone 7) but now I am kinda conditioned to it but I am on
          constant lookout for a smaller iPhone.<br />

          <br />

          I want to reduce my screen time and currently I am considering getting the
          <AppLink to="https://www.indiegogo.com/projects/light-phone-2" external>Light Phone 2</AppLink>.
        </p>

        <p>
          <AppLink to="https://amzn.to/32HC4q9" external>Kindle Paperwhite - White</AppLink><br />
          I love physical books more but no regrets getting a Kindle as it's super useful while travelling.
        </p>
      </section>

      <section class="mt-6" id="desktop-monitor">
        <h3 class="text-xl text-bold">Desktop Monitor</h3>

        <p>
          <AppLink to="https://amzn.to/2JiSbDb" external
            >LG 27UK650-W 27 Inch 4K UHD IPS LED Monitor with HDR 10 and Adjustable Stand</AppLink
          >
          mounted with <AppLink to="https://amzn.to/2LsSoEZ" external>Arm Desk Mount Stand</AppLink>. This version
          doesn't have USB C connectivity, I would recommend something with with USB C PD.
        </p>
      </section>

      <section class="mt-6">
        <h3 class="text-xl text-bold">Gaming Setup</h3>

        <p class="mb-4">
          <AppLink to="https://www.mi.com/in/mi-led-tv-4x-pro-55" external>Mi LED TV 4X PRO 138.8 cm (55)</AppLink
          ><br />
          It's good and cheap; works well for casual gaming and Netflix binges. However, blacks would appear washed out
          in a bright room and built-in speakers are terrible. You would have to pair it with a good speaker setup (It
          support HDMI ARC, so that's a plus).
        </p>

        <p class="mb-4">
          <AppLink to="https://amzn.to/2BzMEnv" external>PlayStation 4 Pro 1TB Console</AppLink>
        </p>

        <p class="mb-4">
          <AppLink to="https://www.sony.co.in/electronics/sound-bars/ht-rt40" external
            >Stylish 5.1ch Tall Boy Home Theater System (HT-RT40)</AppLink
          ><br />
          It's great audio system but cable management could be a headache. I recommend
          <AppLink to="https://amzn.to/2BzV9ip" external>Sony HT-RT5</AppLink> over it.
        </p>
      </section>

      <section class="mt-6">
        <h3 class="text-xl text-bold">Accessories</h3>

        <p class="mb-4">
          <AppLink to="https://amzn.to/2JiV9HP" external>Apple Magic Keyboard (US English) - Silver</AppLink>
        </p>

        <p class="mb-4">
          <AppLink to="https://amzn.to/31JVtFI" external>Apple Magic Mouse 2 - Silver</AppLink>
        </p>

        <p class="mb-4">
          <AppLink to="https://amzn.to/2JiJngp" external
            >Bose Noise Cancelling Wireless Bluetooth Headphones 700</AppLink
          ><br />
          Hands-down; great headphones.
        </p>

        <p class="mb-4">
          <AppLink to="https://amzn.to/342OkSJ" external>USB C Power Bank RAVPower 26800mAh PD Portable Charger</AppLink
          ><br />
          It can charge MacBooks and iPhones. Super useful on long flights (without power outlets).
        </p>

        <p class="mb-4">
          <AppLink to="https://amzn.to/31Iuvyq" external>Canon M50 Mirrorless Camera</AppLink><br />
          It's compact and light, really nice camera. Only regret is 30 minute recording limit — hate EU for this.
        </p>

        <p class="mb-4">
          <AppLink to="https://amzn.to/2W7Lhpv" external>GoPro HERO7 Black Camera </AppLink><br />
          New addition to my collection, exploring.
        </p>

        <p>
          <AppLink to="https://amzn.to/2pSoEJp" external>Osaka Pro Series Waterproof DSLR Backpack</AppLink>
        </p>
      </section>

      <section class="mt-6">
        <h3 class="text-xl text-bold">Desk</h3>

        <p>
          <AppLink
            to="https://www.pepperfry.com/phnom-penh-study-table-in-black-frosty-white-finish-by-furniturekraft-1665983.html"
            external
            >Phnom Penh Study Table in Black &amp; Frosty White Finish by Furniturekraft</AppLink
          >
        </p>

        <p>
          <AppLink to="https://www.urbanladder.com/products/eisner-study-chair" external>Eisner Study Chair</AppLink>
        </p>

        <p>
          <AppLink to="https://amzn.to/33St01S" external
            >AmazonBasics Large Extended Gaming Computer Mouse Pad - Black</AppLink
          >
        </p>

        <p>
          <AppLink to="https://amzn.to/31JUXYi" external>Rife Gas Powered Monitor Arm Desk Mount Stand</AppLink>
        </p>

        <p class="mb-4">It's a cheap setup, nothing to recommend here.</p>
      </section>
    </section>

    <section class="mt-10">
      <h2 class="text-3xl">Editor &amp; Terminal</h2>

      <section class="mt-6">
        <h3 class="text-xl text-bold">
          Editor
        </h3>

        <p class="mb-4">
          I preliminarily use <AppLink to="https://code.visualstudio.com/" external>Visual Studio Code</AppLink> with
          the "Default Dark+" theme and <AppLink to="https://www.vim.org/" external>Vim</AppLink> for quick editing.
          However, I use the "Default Light+" theme while presenting or screen-casting.
        </p>

        <p>
          <AppLink to="https://gist.github.com/znck/5ac0affed3032704822fcbd890c4ee6d" external
            >Settings Sync Gist</AppLink
          >
          for those who are wondering what extensions I'm running. I would be happy to write a post on essential
          extensions if people are interested.
        </p>
      </section>

      <section class="mt-6">
        <h3 class="text-xl text-bold">
          Terminal
        </h3>

        <p class="mb-4">
          I use <AppLink to="https://iterm2.com/" external>iTerm2</AppLink> with
          <AppLink to="https://ohmyz.sh/" external>oh my zsh</AppLink> and the default "robbyrussell" zsh theme since
          the overall experience is more enjoyable for me in the terminal and makes everything visually pleasing to look
          at.
        </p>

        <p class="mb-4">
          I sync all my bash/zsh configuration and alias to a
          <AppLink
            to="https://github.com/znck/dotfiles"
            external
            description="Github repository containing Rahul Kadyan's zsh/bash config files"
            >github repository</AppLink
          >. You might find the
          <AppLink to="https://github.com/znck/dotfiles/blob/master/scripts/aliasthat.sh" external
            >aliasthat script</AppLink
          >
          quite interesting.
        </p>
      </section>

      <p>
        I use <AppLink to="https://github.com/tonsky/FiraCode" external>the FiraCode font</AppLink> for both editor and
        terminal.
      </p>
    </section>

    <section class="mt-10">
      <h2 class="text-3xl">Applications</h2>

      <ul class="list-disc list-outside pl-4">
        <li>
          <AppLink to="https://protonmail.com" external>ProtonMail</AppLink>
          hosts my mailbox. It's a privacy focused email service which provides end-to-end encrypted emails.
        </li>

        <li>
          <AppLink to="https://www.notion.so/" external>Notion.so</AppLink>
          is my note taking app of choice and will probably continue to be so for a long time.
        </li>

        <li>
          I use
          <AppLink to="https://github.com/tekezo/Karabiner-Elements" external>Karabiner-Elements</AppLink> to re-map
          CapsLock key to Escape.
        </li>

        <li><AppLink to="https://todoist.com/" external>Todoist</AppLink> is my day planner or task management app.</li>

        <li>I use <AppLink to="https://hub.github.com/" external>hub</AppLink> for maintaining github projects.</li>

        <li>
          I would prefer <AppLink to="https://www.spotify.com/" external>Spotify</AppLink> but I am stuck with
          <AppLink to="https://www.apple.com/apple-music/" external>Apple Music</AppLink> for now. For reasons that,
          Spotify has no Siri support which is absolutely necessary for me and another reason being I can't figure out
          how to unsubscribe from Apple Music.
        </li>
      </ul>
    </section>

    <aside class="text-sm text-gray-600 mt-10">
      <p>
        This page is inspired by
        <cite>
          <AppLink to="https://www.bencodezen.io/uses/" external>
            <span class="text-gray-700">Ben Hong's Uses page</span>
          </AppLink>
        </cite>
      </p>
    </aside>
  </Layout>
</template>
