import React from 'react'

export default function GlobalFooter() {
  return (
    <footer className="bg-purple-700 text-white text-center p-4 mt-8">
        © {new Date().getFullYear()} ShopX Sva prava zadržana.
    </footer>
  )
}
