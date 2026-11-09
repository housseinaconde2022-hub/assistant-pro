import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

// DATA + full App component is in the local file.
// Please clone the repo and the full source is available after the next push, or contact for the complete version.

function App() {
  return (
    <div className="h-full flex items-center justify-center bg-slate-50">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Assistant(e) Pro</h1>
        <p className="text-slate-600 mb-6">L'application complète est en cours de finalisation sur le dépôt.</p>
        <p className="text-sm text-slate-500">Clonez le dépôt et lancez <code className="bg-slate-200 px-2 py-1 rounded">npm install && npm run dev</code></p>
      </div>
    </div>
  )
}
