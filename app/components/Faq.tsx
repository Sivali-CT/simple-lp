"use client"
import { Disclosure } from '@headlessui/react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is Kubernetes?",
    answer:
      "Kubernetes is an open-source container orchestration platform used to automate deployment, scaling, and management of containerized applications.",
  },
  {
    question: "How does Kubernetes work?",
    answer:
      "Kubernetes works by organizing containers into logical units called pods, managing their deployment, scaling, and ensuring their availability across clusters of machines.",
  },
  {
    question: "What are the key components of Kubernetes?",
    answer:
      "kube-apiserver, kube-controller-manager, kube-scheduler, etcd, kubelet, and kube-proxy.",
  },
  {
    question: "What are the benefits of using Kubernetes?",
    answer:
      "Automated scaling and management of applications, High availability and fault tolerance, Portability across various infrastructure environments, and Efficient resource utilization.",
  },
  {
    question: "How does Kubernetes facilitate application scaling?",
    answer:
      "Kubernetes allows both horizontal and vertical scaling. Horizontal scaling involves adding or removing instances of applications, while vertical scaling adjusts the resources allocated to individual instances, ensuring flexibility in meeting varying workload demands.",
  },
]

export default function Faq() {
  return (
    <div className="bg-white" id='faq'>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusCircleIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}