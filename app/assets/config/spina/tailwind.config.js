module.exports = {
  content: [
    '/home/sergiop/.rbenv/versions/3.1.2/lib/ruby/gems/3.1.0/bundler/gems/spinuvet-6b45839fa25f/app/views/**/*.*',
'/home/sergiop/.rbenv/versions/3.1.2/lib/ruby/gems/3.1.0/bundler/gems/spinuvet-6b45839fa25f/app/components/**/*.*',
'/home/sergiop/.rbenv/versions/3.1.2/lib/ruby/gems/3.1.0/bundler/gems/spinuvet-6b45839fa25f/app/helpers/**/*.*',
'/home/sergiop/.rbenv/versions/3.1.2/lib/ruby/gems/3.1.0/bundler/gems/spinuvet-6b45839fa25f/app/assets/javascripts/**/*.js',
'/home/sergiop/.rbenv/versions/3.1.2/lib/ruby/gems/3.1.0/bundler/gems/spinuvet-6b45839fa25f/app/**/application.tailwind.css'
  ],
  theme: {
    fontFamily: {
      body: ['Metropolis'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
    extend: {
      colors: {
        spina: {
          light: '#123142',
          DEFAULT: '#a73f44',
          dark: '#9b2d32'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
	require('@tailwindcss/aspect-ratio'),
	require('@tailwindcss/typography')
  ]
}
