(ns viz.flowers
  (:require 
   [reagent.dom.client :as rdomc]
   [utils :as u]))

(defn foo []
  [:ul 
   (for [n [1 2 3 4 5 6]]
     [:li "number " n])])

(defn main []
  [:div
   
   [:h1 "Hello Worldssss"] 
   [foo]])


(comment 

  (defn load-deaths
    []
    (let [data (u/read-csv "resources/data/decadal-deaths-disasters-type.csv")
          cols (first data)
          rows (rest data)]
      (mapv (fn [row]
              (->> (zipmap cols row)
                   (reduce-kv (fn [m k v]
                                (assoc m k (if (= "Deaths" (subs k 0 6))
                                             (parse-double v)
                                             v)))
                              {})))
            rows)))
  
  (def deaths (load-deaths))

  (first deaths) 
  )

; ---------------------------------------

(defonce react-root (rdomc/create-root (.. js/document (querySelector "main"))))

(defn ^:dev/after-load init
  []
  (rdomc/render react-root [main]))